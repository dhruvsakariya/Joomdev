import type { PageHelp } from "@/components/HelpSidebarBase";

// Dummy help content for Claims Wallet Plus page
export const claimsWalletPlusHelp: PageHelp = {
  title: "Claims Wallet Plus Help",
  description:
    "Get assistance and learn more about using your Claims Wallet Plus, including virtual cards, transfers, and security features.",
  sections: [
    {
      title: "Getting Started",
      items: [
        {
          title: "What is Claims Wallet Plus?",
          description:
            "Claims Wallet Plus is a secure digital wallet that allows you to manage your claim funds, make instant transfers, and use a virtual card for online purchases.",
        },
        {
          title: "How do I activate my virtual card?",
          description:
            "To activate your virtual card, navigate to the 'Virtual Card' section and follow the on-screen instructions. You may need to verify your identity for security.",
        },
      ],
    },
    {
      title: "Transfers & Payments",
      items: [
        {
          title: "How can I transfer funds?",
          description:
            "You can transfer funds to your bank account or another card by selecting the 'Transfer' option and entering the required details.",
        },
        {
          title: "Are there any transfer limits?",
          description:
            "Transfer limits may apply based on your account verification status. Check the 'Limits' section in your wallet for more information.",
        },
      ],
    },
    {
      title: "Security",
      items: [
        {
          title: "How is my account secured?",
          description:
            "Your account is protected with bank-grade encryption, two-factor authentication, and real-time fraud monitoring.",
        },
        {
          title: "What should I do if I suspect fraud?",
          description:
            "Immediately lock your card in the app and contact support through the help chat or by calling our hotline.",
        },
      ],
    },
  ],
  features: [
    {
      title: "Instant Virtual Card",
      description:
        "Get a Mastercard virtual card instantly for online purchases and subscriptions.",
    },
    {
      title: "Real-time Notifications",
      description:
        "Receive instant alerts for every transaction and account activity.",
    },
    {
      title: "Global Acceptance",
      description:
        "Use your virtual card anywhere Mastercard is accepted online.",
    },
  ],
};
