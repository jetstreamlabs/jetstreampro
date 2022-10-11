import type { ComponentResolver } from 'unplugin-vue-components/types';

const components = [
  'MainLayout',
  'ApiTokenManager',
  'DeleteUserForm',
  'LogoutOtherBrowserSessionsForm',
  'TwoFactorAuthenticationForm',
  'UpdatePasswordForm',
  'UpdateProfileInformationForm',
  'CreateTeamForm',
  'DeleteTeamForm',
  'TeamMemberManager',
  'UpdateTeamName',
  'ActionMessage',
  'ActionSection',
  'ApplicationLogo',
  'ApplicationMark',
  'AuthenticationCard',
  'AuthenticationCardLogo',
  'Banner',
  'Checkbox',
  'ConfirmationModal',
  'ConfirmsPassword',
  'DangerButton',
  'DialogModal',
  'Dropdown',
  'DropdownLink',
  'FormSection',
  'Input',
  'InputError',
  'Label',
  'Modal',
  'Navbar',
  'NavLink',
  'ResponsiveNavLink',
  'SectionBorder',
  'SectionTitle',
  'ValidationErrors',
  'Welcome',
];

export interface JetstreamProResolverOptions {
  /**
   * prefix for JetstreamPro components used in templates
   *
   * @default ""
   */
  prefix?: string;
}

/**
 * Resolver for JetstreamPro Vue components.
 *
 * @link https://github.com/themesberg/flowbite-vue
 */
export function JetstreamProResolver(options: JetstreamProResolverOptions = {}): ComponentResolver {
  const { prefix = '' } = options;
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.startsWith(prefix)) {
        const componentName = name.substring(prefix.length);
        if (components.includes(componentName)) {
          return {
            name: componentName,
            from: '@jetstreampro/components',
          };
        }
      }
    },
  };
}
