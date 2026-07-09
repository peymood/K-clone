
"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/app/Components/ui/card";
import { FieldGroup } from "@/app/Components/ui/field";
import { Button } from "@/app/Components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function Otp({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [otp, setotp] = useState("");
  const [timer, setTimer] = useState(120);

  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  const formattedTime = `${minutes}:${seconds
    .toString()
    .padStart(2, "0")}`;

  const handleResendOtp = () => {
    // اینجا API ارسال مجدد کد را صدا بزن
    console.log("Resend OTP");

    setotp("");
    setTimer(120);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("OTP:", otp);

    // اینجا API تایید کد را صدا بزن
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center text-2xl font-bold">
          کد پیامک شده
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <div className="space-y-4">
                <InputOTP
                  maxLength={6}
                  value={otp}
                  onChange={setotp}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>

                <div className="text-center">
                  {timer > 0 ? (
                    <p className="text-sm text-muted-foreground">
                      ارسال مجدد تا {formattedTime}
                    </p>
                  ) : (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleResendOtp}
                    >
                      ارسال مجدد کد
                    </Button>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                className="cursor-pointer"
                disabled={otp.length !== 6}
              >
                تایید
              </Button>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}