import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import { Item } from '../types/Products';
import { ItemModalStyles as styles } from '../styles/ItemModal';

const ItemModal = ({
  data,
  onClose,
}: {
  data: Item | null | undefined;
  onClose: () => void;
}) => {
  return (
    <Modal
      isVisible={Boolean(data?.id)}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={300}
      animationOutTiming={200}
      backdropTransitionInTiming={500}
      backdropTransitionOutTiming={300}
      statusBarTranslucent
      backdropOpacity={0.5}
      style={styles.modal}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      useNativeDriver={true}
      hideModalContentWhileAnimating={true}
    >
      <View style={styles.modalContainer}>
        <View style={{ position: 'relative' }}>
          {/* Button to close the modal */}
          <TouchableOpacity style={styles.cross} onPress={onClose}>
            <Text style={styles.crossText}>x</Text>
          </TouchableOpacity>
          <Image
            source={{ uri: data?.image }}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles?.categoryText}> {data?.category} </Text>
          <Text style={styles.rate}>{data?.rating?.rate} ⭐️</Text>
        </View>

        <View style={styles.firstLine}>
          <Text style={styles.title} numberOfLines={2}>
            {data?.title}
          </Text>
          <Text style={styles.price}> {data?.price} $</Text>
        </View>
        <Text style={styles.description}>{data?.description}</Text>
      </View>
    </Modal>
  );
};

export default ItemModal;
