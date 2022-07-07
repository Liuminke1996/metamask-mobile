import { Theme } from 'app/util/theme/models';
import { StyleSheet } from 'react-native';
/**
 * Style sheet function for ConfirmationModal component.
 *
 * @param params Style sheet params.
 * @param params.theme App theme from ThemeContext.
 * @param params.vars Inputs that the style sheet depends on.
 * @returns StyleSheet object.
 */
const styleSheet = (params: { theme: Theme }) => {
  const { theme } = params;
  const { colors } = theme;

  return StyleSheet.create({
    screen: { justifyContent: 'center' },
    modal: {
      backgroundColor: colors.background.default,
      borderRadius: 10,
      marginHorizontal: 16,
    },
    bodyContainer: {
      paddingHorizontal: 24,
      paddingVertical: 32,
    },
    headerLabel: {
      marginBottom: 16,
    },
    divider: {
      height: 1,
      backgroundColor: colors.border.muted,
    },
    buttonsContainer: {
      flexDirection: 'row',
      padding: 16,
    },
    button: {
      flex: 1,
    },
    buttonDivider: {
      width: 8,
    },
  });
};

export default styleSheet;
