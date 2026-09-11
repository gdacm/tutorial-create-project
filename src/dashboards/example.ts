import { DashboardMetaOptions } from "@gdacm/base-types";
import { DashboardInfo } from "@gdacm/dashboard-manager";
import { Dashboard, GrafanaItem, TextPanel } from "@gdacm/grafana-items";

const getDashboard = async (uid: string, metaOptions: DashboardMetaOptions): Promise<GrafanaItem> => {
    return new Dashboard(metaOptions)
        .setUid(uid)
        .setTitle(metaOptions.title)
        .setTags(metaOptions.tags)
        .addPanel(
            new TextPanel(metaOptions)
                .setPos(0, 0, 12, 9)
                .setDescription('Demo Panel')
                .withOptions(
                    options => options
                        .withCode(
                            code => code
                                .setLanguage('plaintext')
                                .setShowLineNumbers(false)
                                .setShowMiniMap(false)
                        )
                        .setContent(
`
# Example Markdown Content
This is a demo panel for the example dashboard.
## Sub Section
| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |
| Data 3   | Data 4   |
| Data 5   | Data 6   |
`
                        )
                        .setMode('markdown')
                )
        )
}

export default new DashboardInfo()
    .setEmoji("📺")
    .setSid("example-dashboard")
    .setTitle("Example Dashboard")
    .setTags(["example", "demo"])
    .setDashboardGenerator(getDashboard)
