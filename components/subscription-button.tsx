"use client";

import { useState } from "react";
import axios from "axios";

import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { useProModal } from "@/hooks/use-pro-modal";
import { useToast } from "./ui/use-toast";

interface SubscriptionButtonProps {
  isPro: boolean;
}

export const SubscriptionButton = ({
  isPro = false,
}: SubscriptionButtonProps) => {
  const [loading, setLoading] = useState(false);
  const proModal = useProModal();
  const { toast } = useToast();

  const onClick = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");
      window.location.href = response.data.url;
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button size="sm" variant={isPro ? "default" : "premium"} onClick={onClick}>
      {isPro ? "Manage Subscription" : "Upgrade"}
      {!isPro && <Sparkles className="ml-2 text-white w-4 h-4" />}
    </Button>
  );
};
