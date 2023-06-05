import { ProLayoutProps } from '@ant-design/pro-layout'

const Settings: ProLayoutProps & { pwa?: boolean; logo?: string } = {
  navTheme: 'light',
  colorPrimary: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: false,
  colorWeak: false,
  title: 'Umi',
  pwa: true,
  iconfontUrl: ''
}

export default Settings