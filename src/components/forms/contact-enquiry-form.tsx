"use client";

import * as React from "react";
import { Suspense } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

import { submitEnquiry } from "@/actions/enquiry";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { enquirySchema, type EnquiryInput } from "@/schemas/enquiry";
import { serviceTypeOptions } from "@/constants/services";
import { cn } from "@/lib/utils";

type RequestedServiceSlug = (typeof serviceTypeOptions)[number]["value"];

const ALLOWED_SLUG_LIST: RequestedServiceSlug[] = serviceTypeOptions.map((o) => o.value);

function isRequestedServiceSlug(s: string): s is RequestedServiceSlug {
  return (ALLOWED_SLUG_LIST as readonly string[]).includes(s);
}

/** UI-only honeypot — excluded from zod schema */
type FormValues = EnquiryInput & { website?: string };

function ContactEnquiryFields({ className }: { className?: string }) {
  const [busy, startTransition] = React.useTransition();
  const searchParams = useSearchParams();

  const form = useForm<FormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      serviceType: "",
      location: "",
      message: "",
      website: "",
    },
  });

  React.useEffect(() => {
    const pre = searchParams.get("service");
    if (!pre || !isRequestedServiceSlug(pre)) return;
    form.setValue("serviceType", pre);
  }, [searchParams, form]);

  function onSubmit(data: FormValues) {
    startTransition(() => {
      void (async () => {
        const res = await submitEnquiry(data);
        if (res.ok) {
          toast.success(res.message);
          form.reset({
            name: "",
            phone: "",
            serviceType: "",
            location: "",
            message: "",
            website: "",
          });
          return;
        }
        toast.error(res.message);
        const errs = res.fieldErrors;
        if (!errs) return;
        (Object.keys(errs) as (keyof EnquiryInput | "root")[]).forEach((key) => {
          const msg = errs[key]?.[0];
          if (!msg || key === "root") return;
          form.setError(key, { type: "server", message: msg });
        });
      })();
    });
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className={cn("relative grid gap-5", className)}
      noValidate
    >
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        {...form.register("website")}
        aria-hidden="true"
        className="pointer-events-none absolute h-px w-px opacity-0"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="eq-name">
            Full name<span className="text-destructive">*</span>
          </Label>
          <Input
            id="eq-name"
            autoComplete="name"
            {...form.register("name")}
            aria-invalid={Boolean(form.formState.errors.name)}
            aria-describedby={form.formState.errors.name ? "eq-name-error" : undefined}
          />
          {form.formState.errors.name ? (
            <p id="eq-name-error" className="text-sm text-destructive">
              {form.formState.errors.name.message}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="eq-phone">
            Phone number<span className="text-destructive">*</span>
          </Label>
          <Input
            id="eq-phone"
            inputMode="tel"
            autoComplete="tel"
            {...form.register("phone")}
            aria-invalid={Boolean(form.formState.errors.phone)}
            aria-describedby={form.formState.errors.phone ? "eq-phone-error" : undefined}
          />
          {form.formState.errors.phone ? (
            <p id="eq-phone-error" className="text-sm text-destructive">
              {form.formState.errors.phone.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <Label id="svc-label">
          Service type<span className="text-destructive">*</span>
        </Label>
        <Controller
          name="serviceType"
          control={form.control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger
                id="svc-type"
                className="w-full"
                aria-labelledby="svc-label"
                aria-invalid={Boolean(form.formState.errors.serviceType)}
              >
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {serviceTypeOptions.map((o) => (
                  <SelectItem key={o.value} value={o.value}>
                    {o.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {form.formState.errors.serviceType ? (
          <p className="text-sm text-destructive">
            {form.formState.errors.serviceType.message}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="eq-location">
          Property location / city<span className="text-destructive">*</span>
        </Label>
        <Input
          id="eq-location"
          placeholder="Community, tower, locality"
          {...form.register("location")}
          aria-invalid={Boolean(form.formState.errors.location)}
        />
        {form.formState.errors.location ? (
          <p className="text-sm text-destructive">{form.formState.errors.location.message}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="eq-message">
          Tell us what you are noticing<span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="eq-message"
          rows={4}
          placeholder="Where it leaks, how long, ceilings affected, parking deck details…"
          {...form.register("message")}
          aria-invalid={Boolean(form.formState.errors.message)}
        />
        {form.formState.errors.message ? (
          <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>
        ) : null}
      </div>

      <Button type="submit" size="lg" disabled={busy} className="w-full sm:w-auto">
        {busy ? (
          <>
            <Loader2 className="mr-2 size-4 animate-spin" aria-hidden />
            Sending enquiry…
          </>
        ) : (
          "Request callback"
        )}
      </Button>
    </form>
  );
}

export function ContactEnquiryForm(props: { className?: string }) {
  return (
    <Suspense
      fallback={
        <div
          role="status"
          aria-busy="true"
          className="block rounded-xl border bg-muted px-4 py-6 text-muted-foreground"
        >
          Loading form fields…
        </div>
      }
    >
      <ContactEnquiryFields {...props} />
    </Suspense>
  );
}
