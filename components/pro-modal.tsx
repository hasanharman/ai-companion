"use client";

import { useState } from "react";
import axios from "axios";

import { useProModal } from "@/hooks/use-pro-modal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export const ProModal = () => {
  const proModal = useProModal();
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);

  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      toast({
        description: "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader className="space-y-4">
          <DialogTitle>Upgrade to Pro</DialogTitle>
          <DialogDescription className="text-center space-y-2">
            Create <span className="text-sky-500 font-medium">Custom AI</span>{" "}
            Companions!
          </DialogDescription>
        </DialogHeader>
        <Separator />
        <div className="flex justify-between">
          <p className="text-2xl font-medium">
            $9
            <span className="text-sm font-normal">.99/mo</span>
          </p>
          <Button variant="premium" onClick={onSubscribe} disabled={loading}>
            Subscribe
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
