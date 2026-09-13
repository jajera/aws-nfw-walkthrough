export type GlossaryEntry =
  | string
  | {
      definition: string;
      url?: string;
      urlLabel?: string;
    };

export function resolveGlossaryEntry(entry: GlossaryEntry | undefined): {
  definition: string;
  url?: string;
  urlLabel?: string;
} {
  if (!entry) return { definition: "" };
  if (typeof entry === "string") return { definition: entry };
  return {
    definition: entry.definition,
    url: entry.url,
    urlLabel: entry.urlLabel,
  };
}

export const glossary: Record<string, GlossaryEntry> = {
  nfw: {
    definition:
      "AWS Network Firewall. Managed Suricata-based packet inspection service, typically placed in an inspection VPC.",
    url: "https://docs.aws.amazon.com/network-firewall/latest/developerguide/what-is-aws-network-firewall.html",
    urlLabel: "Network Firewall docs",
  },
  tgw: {
    definition:
      "AWS Transit Gateway. Regional hub that attaches VPCs and can peer to Transit Gateways in other Regions.",
    url: "https://docs.aws.amazon.com/vpc/latest/tgw/what-is-transit-gateway.html",
    urlLabel: "Transit Gateway docs",
  },
  ram: {
    definition:
      "AWS Resource Access Manager. Shares the regional Transit Gateway so workload accounts can attach spokes.",
    url: "https://docs.aws.amazon.com/ram/latest/userguide/what-is.html",
    urlLabel: "RAM docs",
  },
  "double-inspect": {
    definition:
      "What this lab ships. Peer on inspection route tables; both hubs inspect every cross-Region hop. Same-Region traffic hairpins through one local NFW.",
  },
  "inspection-vpc": {
    definition:
      "Hub VPC that holds the Network Firewall endpoint and Transit Gateway attachment used to hairpin spoke traffic for inspection.",
  },
};
