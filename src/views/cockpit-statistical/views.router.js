const CockpitStatistical = () => import('./cockpit-statistical.vue')

export function CockpitStatisticalRoute(path = '/cockpit-statistical') {
  return {
    path,
    name: 'CockpitStatistical',
    component: CockpitStatistical,
    label: '驾驶舱统计'
  }
}
