import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import RNModal from 'react-native-modal';
type ModalProps = {
  isVisible: boolean;
  children: React.ReactNode;
  [x: string]: any;
};
export const Modal = ({isVisible = false, children, ...props}: ModalProps) => {
  return (
    <RNModal
      isVisible={isVisible}
      animationInTiming={1000}
      animationOutTiming={1000}
      backdropTransitionInTiming={800}
      backdropTransitionOutTiming={800}
      {...props}>
      {children}
    </RNModal>
  );
};

export const ModalContainer = ({children}: {children: React.ReactNode}) => (
  <View style={styles.container}>{children}</View>
);

export const ModalHeader = ({title}: {title: string}) => (
  <View style={styles.header}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

export const ModalBody = ({children}: {children?: React.ReactNode}) => (
  <View style={styles.body}>{children}</View>
);

export const ModalFooter = ({children}: {children?: React.ReactNode}) => (
  <View style={styles.footer}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 24,
  },
  body: {
    justifyContent: 'center',
    paddingHorizontal: 15,
    minHeight: 100,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
  },
});
