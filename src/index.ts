import { createDashboards } from '@gdacm/dashboard-manager';
import dashboardsInfos from './dashboards';
import infoCode from './info';

const main = async () => {
    await createDashboards(['./local'], './out', infoCode, dashboardsInfos);
}

main().catch(console.error);
