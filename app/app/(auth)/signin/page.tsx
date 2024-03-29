"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/client";

export default function SignInPage() {
  return (
    <Card className="mx-auto w-full max-w-sm p-4">
      <CardHeader>
        <CardTitle className="text-2xl">Sign In</CardTitle>
      </CardHeader>
      <CardContent>
        <Button
          className="w-full"
          onClick={async () => {
            const supabase = createClient();
            supabase.auth.signInWithOAuth({
              provider: "github",
              options: {
                redirectTo: `https://app.releaser.xyz/api/auth/callback`,
              },
            });
          }}
        >
          Github
        </Button>
      </CardContent>
    </Card>
  );
}