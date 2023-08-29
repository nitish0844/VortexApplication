import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';

const data = [
  {
    paymentmode: 'Online',
    cost: '1000',
    paymentId: '12cdcc5c5c1',
    date: '19.02.2023',
    time: '09.30AM',
    profileImg:
      'https://img.favpng.com/15/13/12/marvel-avengers-alliance-marvel-ultimate-alliance-2-captain-america-hulk-iron-man-png-favpng-vA4QPARrsALaUx93e8Y2mdpd1_t.jpg',
  },
  {
    paymentmode: 'Offline',
    paymentId: '12cdcc5c5c1',
    date: '15.03.2023',
    cost: '1000',
    time: '09.30AM',
    profileImg:
      'https://w7.pngwing.com/pngs/24/68/png-transparent-marvel-thor-marvel-super-hero-squad-thor-marvel-cinematic-universe-avengers-superhero-fictional-character-wiki.png',
  },
  {
    paymentmode: 'Offline',
    cost: '1000',
    paymentId: '12cdcc5c5c1',
    date: '01.11.2021',
    time: '09.30AM',
    profileImg:
      'https://www.pngall.com/wp-content/uploads/4/Marvel-Transparent.png',
  },
  {
    paymentmode: 'Online',
    cost: '600',
    paymentId: '12cdcc5c5c1',
    date: '20.10.2023',
    time: '09.30AM',
    profileImg:
      'https://i.pinimg.com/736x/a8/14/5d/a8145d015b89b5bbb0058fd5414b7285.jpg',
  },
  {
    paymentmode: 'Online',
    paymentId: '12cdcc5c5c1',
    cost: '1000',
    date: '15.08.2021',
    time: '09.30AM',
    profileImg:
      'https://www.pngmart.com/files/9/Marvel-Thanos-PNG-Free-Download.png',
  },
];

const PaymentHistory = () => {
  const [sortBy, setSortBy] = useState('newest'); // Default sort order
  const [showFilters, setShowFilters] = useState(false);
  const [modalOptionClicked, setModalOptionClicked] = useState(false);

  const sortedData = [...data].sort((a, b) => {
    const aDateParts = a.date.split('.').map(part => parseInt(part, 10));
    const bDateParts = b.date.split('.').map(part => parseInt(part, 10));

    const aDate = new Date(aDateParts[2], aDateParts[1] - 1, aDateParts[0]);
    const bDate = new Date(bDateParts[2], bDateParts[1] - 1, bDateParts[0]);

    if (sortBy === 'newest') {
      return bDate - aDate;
    } else {
      return aDate - bDate;
    }
  });

  const toggleFilterModal = () => {
    if (!modalOptionClicked) {
      setShowFilters(!showFilters);
    } else {
      setModalOptionClicked(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.historyTextContainer}>
        <Text style={styles.historyText}>History</Text>
        <TouchableOpacity onPress={toggleFilterModal}>
          <Feather name="filter" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      {/* {showFilters && (
        <View style={styles.filterContainer}>
          <View style={styles.filterButtons}>
            <TouchableOpacity
              style={[
                styles.filterButton,
                sortBy === 'newest' && styles.selectedFilterButton,
              ]}
              onPress={() => setSortBy('newest')}>
              <Text style={styles.filterButtonText}>Newest to Oldest</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.filterButton,
                sortBy === 'oldest' && styles.selectedFilterButton,
              ]}
              onPress={() => setSortBy('oldest')}>
              <Text style={styles.filterButtonText}>Oldest to Newest</Text>
            </TouchableOpacity>
          </View>
        </View>
      )} */}

      <ScrollView style={styles.scrollView}>
        {sortedData.map((item, index) => (
          <View style={styles.itemContainer} key={index}>
            <Image
              source={{uri: item.profileImg}}
              style={styles.profileImage}
            />
            <View style={styles.itemDetails}>
              <Text style={styles.paymentInfo}>Mode: {item.paymentmode}</Text>
              <Text style={styles.dateTime}>
                {item.date} at {item.time}
              </Text>
            </View>
            <Text style={styles.cost}>₹ {item.cost}</Text>
          </View>
        ))}
      </ScrollView>
      <Modal
        transparent={true}
        visible={showFilters}
        onRequestClose={() => {
          if (!modalOptionClicked) {
            setShowFilters(false);
          } else {
            setModalOptionClicked(false);
          }
        }}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback onPress={() => setShowFilters(false)}>
            <View style={styles.overlay} />
          </TouchableWithoutFeedback>
          <View style={styles.filterModalContainer}>
            <View style={styles.filterModal}>
              <TouchableOpacity
                style={[
                  styles.filterButton,
                  sortBy === 'newest' && styles.selectedFilterButton,
                ]}
                onPress={() => {
                  setSortBy('newest');
                  setShowFilters(false);
                }}>
                <Text style={styles.filterButtonText}>Newest to Oldest</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.filterButton,
                  sortBy === 'oldest' && styles.selectedFilterButton,
                ]}
                onPress={() => {
                  setSortBy('oldest');
                  setShowFilters(false);
                }}>
                <Text style={styles.filterButtonText}>Oldest to Newest</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PaymentHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    marginTop: 80,
  },
  historyTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Align items in a row with space between them
    alignItems: 'center', // Vertically center items
    paddingHorizontal: 15, // Add padding for better spacing
  },
  historyText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  username: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  paymentInfo: {
    color: '#fff',
    fontSize: 16,
    marginTop: 3,
    fontWeight: '700',
  },
  dateTime: {
    color: '#fff',
    fontSize: 14,
    marginTop: 3,
  },
  cost: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  filterModalContainer: {
    position: 'absolute',
    top: '40%', // Adjust this value to position the modal just below the Filter icon
    right: -25,
  },
  filterModal: {
    width: 200,
    height: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  filterButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#FFA500',
    borderRadius: 5,
    marginVertical: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedFilterButton: {
    backgroundColor: '#FFA500',
  },
  filterButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
  },
});
