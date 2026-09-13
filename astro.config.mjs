import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { starlightBasePath } from "starlight-base-path";

const site = "https://aws-nfw-walkthrough.johna.kiwi";
const base = "/";

const walkthroughRepo = "https://github.com/jajera/aws-nfw-walkthrough";

export default defineConfig({
  site,
  base,
  integrations: [
    starlight({
      title: "AWS NFW Walkthrough",
      favicon: "/favicon.svg",
      description:
        "Dual-hub Transit Gateway and Network Firewall across Sydney and Auckland — cross-Region traffic double-inspected on both hubs.",
      customCss: [
        "./src/styles/patina-tokens.css",
        "./src/styles/splash-overrides.css",
      ],
      components: {
        ThemeSelect: "./src/components/ThemeSelect.astro",
        Head: "./src/components/Head.astro",
      },
      plugins: [starlightBasePath()],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: walkthroughRepo,
        },
      ],
      editLink: {
        baseUrl: `${walkthroughRepo}/edit/main/`,
      },
      lastUpdated: true,
      pagination: true,
      sidebar: [
        { label: "Home", link: "/" },
        {
          label: "Concepts",
          items: [
            { slug: "concepts/architecture" },
            { slug: "concepts/inspection-model" },
            { slug: "concepts/traffic-path" },
            { slug: "concepts/demo-roles" },
          ],
        },
        {
          label: "Deploy and operate",
          items: [
            { slug: "deploy-and-operate/prerequisites" },
            {
              label: "Hubs",
              items: [
                { label: "Sydney", slug: "deploy-and-operate/hub/sydney" },
                { label: "Auckland", slug: "deploy-and-operate/hub/auckland" },
                { label: "Validate", slug: "deploy-and-operate/hub/validate" },
              ],
            },
            {
              label: "Workloads (dev)",
              items: [
                { label: "Sydney", slug: "deploy-and-operate/workload/sydney" },
                { label: "Auckland", slug: "deploy-and-operate/workload/auckland" },
                { label: "Validate", slug: "deploy-and-operate/workload/validate" },
              ],
            },
            {
              label: "Workloads (prod)",
              items: [
                { label: "Sydney", slug: "deploy-and-operate/workload-prod/sydney" },
                { label: "Auckland", slug: "deploy-and-operate/workload-prod/auckland" },
                { label: "Validate", slug: "deploy-and-operate/workload-prod/validate" },
              ],
            },
            {
              label: "Hub peering",
              items: [
                { label: "Sydney", slug: "deploy-and-operate/hub-peering/sydney" },
                { label: "Auckland", slug: "deploy-and-operate/hub-peering/auckland" },
                { label: "Validate", slug: "deploy-and-operate/hub-peering/validate" },
              ],
            },
            { label: "Prove mesh", slug: "deploy-and-operate/prove" },
            {
              label: "Network Firewall",
              items: [
                { label: "Rule design", slug: "deploy-and-operate/nfw/rule-design" },
                { label: "Sydney", slug: "deploy-and-operate/nfw/sydney" },
                { label: "Auckland", slug: "deploy-and-operate/nfw/auckland" },
                { label: "Deny", slug: "deploy-and-operate/nfw/deny" },
                { label: "Allow", slug: "deploy-and-operate/nfw/allow" },
                { label: "Validate", slug: "deploy-and-operate/nfw/validate" },
              ],
            },
            { slug: "deploy-and-operate/teardown" },
          ],
        },
        {
          label: "Reference",
          items: [
            { slug: "reference/commands" },
            { slug: "reference/cost" },
            { slug: "reference/troubleshooting" },
          ],
        },
      ],
    }),
  ],
});
