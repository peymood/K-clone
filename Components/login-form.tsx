"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader } from "@/Components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/Components/ui/field";
import { Input } from "@/Components/ui/input";
import { useAuth } from "@/Context/AuthContext";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { phone, setPhone, error, handlePhone } = useAuth();

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center font-bold text-2xl ">
          صفحه ورود
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePhone}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">شماره موبایل</FieldLabel>
                <Input
                  id="phone"
                  type="text"
                  placeholder="09123456789"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </Field>

              <Field>
                <Button
                  className="w-full hover:bg-blue-600 cursor-pointer"
                  type="submit"
                >
                  ورود
                </Button>
                <FieldDescription className="text-center">
                  اگر حساب ندارید <a href="#">ثبت نام </a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>

      {error && <p>Error...</p>}
    </div>
  );
}
