import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Accessibility Tests", () => {
  test("should have no critical accessibility violations", async ({ page }) => {
    await page.goto("http://localhost:5173");

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();

    const criticalViolations = accessibilityScanResults.violations
      .filter(
        (violation) =>
          violation.impact === "critical" || violation.impact === "serious",
      )
      .map((violation) => {
        return {
          description: violation.description,
          impact: violation.impact,
          nodes: violation.nodes.map((node) => node.html),
        };
      });

    if (criticalViolations.length > 0) {
      console.log("\n=== Accessibility Violations Found ===\n");
      criticalViolations.forEach((violation) => {
        console.log(`- ${violation.description}`);
        console.log(`  Impact: ${violation.impact}`);
        console.log(violation.nodes);
      });
    }

    expect(criticalViolations).toHaveLength(0);
  });
});
