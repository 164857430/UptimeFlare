// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "Rafael's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/164857430', label: 'GitHub' },
    { link: 'https://ooh.pp.ua/', label: 'Nezha' },
    { link: 'https://www.lll.hidns.vip/', label: '思维导图'},
  ],
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
  monitors: [
    // Example TCP Monitor
    {
      id: '99999',
      name: '思维导图',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://www.lll.hidns.vip',
      timeout: 10000,
    },
  ],
}

// You can define multiple maintenances here
// During maintenance, an alert will be shown at status page
// Also, related downtime notifications will be skipped (if any)
// Of course, you can leave it empty if you don't need this feature


// Don't edit this line
export { maintenances, pageConfig, workerConfig }
