import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Next's dev-mode build-activity badge defaults to the bottom-left corner, which is
   * exactly where the collapsed sidebar rail puts its own expand/collapse button. The
   * badge sits on top and swallows the click, so "Expand the sidebar" did nothing in dev
   * until the page was scrolled or the badge dismissed. Production builds never render
   * the badge, so this only affects developers — which is precisely who it blocks.
   */
  devIndicators: {
    position: "bottom-right",
  },
};

export default nextConfig;
