import type { ComponentResolver } from 'unplugin-vue-components/types'

const components = [
  'Button',
  'Spinner',
  'ButtonGroup',
  'Tabs',
  'Tab',
  'Dropdown',
  'FlowbiteThemable',
  'FlowbiteThemableChild',
  'Accordion',
  'Avatar',
  'Badge',
  'Breadcrumb',
  'Card',
  'Carousel',
  'Footer',
  'ListGroup',
  'ListGroupItem',
  'Modal',
  'Navbar',
  'Pagination',
  'Progress',
  'Rating',
  'Sidebar',
  'Table',
  'Timeline',
  'Toast',
  'ToastProvider',
  'Tooltip'
]

export interface FlowbiteVueResolverOptions {
  /**
   * prefix for flowbite-vue components used in templates
   *
   * @default ""
   */
  prefix?: string
}

/**
 * Resolver for flowbite-vue
 *
 * @link https://github.com/themesberg/flowbite-vue
 */
export function FlowbiteVueResolver(options: FlowbiteVueResolverOptions = {}): ComponentResolver {
  const { prefix = '' } = options
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.startsWith(prefix)) {
        const componentName = name.substring(prefix.length)
        if (components.includes(componentName)) {
          return {
            name: componentName,
            from: 'flowbite-vue',
          }
        }
      }
    },
  }
}