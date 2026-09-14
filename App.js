import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  Platform,
  Dimensions,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5, Feather } from '@expo/vector-icons';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// =========================================================================
// 1. EXACT FIGMA DESIGN TOKENS (INSPECTED FROM NODE 132:3 / 132:38)
// =========================================================================
const TOKENS = {
  colors: {
    primaryBlue: '#407BFF',          // Header background & primary accents
    primaryDark: '#263238',          // Headings & primary labels
    accentOrange: '#FF9948',         // "Map" action button & badge highlights
    warmAmber: '#FFD37B',            // "Mahabalipuram" tag pill fill
    warmAmberText: '#724D03',        // "Mahabalipuram" tag pill text
    statusCardBg: '#FFF5E9',         // Warm peach card fill
    statusCardBorder: '#F0E2D2',     // Status card border
    background: '#F9F9F9',           // Canvas soft gray
    surface: '#FFFFFF',              // Pure white cards
    textPrimary: '#263238',
    textSecondary: '#555963',
    textMuted: '#B0B0B2',
    iconMuted: '#738086',
    border: '#EEEEEE',
    couponBlue: '#407BFF',
    couponYellow: '#FFB624',
  },
  radii: {
    pill: 9999,
    card: 16,
    tile: 12,
    sm: 8,
  },
};

// =========================================================================
// 2. STATIC MOCK DATASETS (MATCHED TO FIGMA LAYERS)
// =========================================================================
const SERVICE_CATEGORIES = [
  { id: '1', name: 'Flights', icon: 'airplane', type: 'ion' },
  { id: '2', name: 'Hotels', icon: 'bed', type: 'ion' },
  { id: '3', name: 'Bus/train', icon: 'train-outline', type: 'ion' },
  { id: '4', name: 'Cars', icon: 'car-sport-outline', type: 'ion' },
];

const DEALS_LIST = [
  {
    id: '1',
    type: 'flight',
    discount: 'Flat 20% off',
    description: 'on your flight booking for new customers in Travelogue',
    coupon: 'TL20%',
    badgeColor: '#488BFF',
    couponColor: '#407BFF',
    partners: ['IndiGo', 'AirAsia', 'SpiceJet'],
  },
  {
    id: '2',
    type: 'hotel',
    discount: 'Flat 20% off',
    description: 'on your hotel booking for new customers in Travelogue',
    coupon: 'TL20%',
    badgeColor: '#4688FB',
    couponColor: '#FFB624',
    partners: ['Taj', 'Marriott', 'Hyatt'],
  },
];

const DESTINATIONS = [
  {
    id: '1',
    name: 'Ooty',
    subtitle: 'Cloud clifs & waterfalls',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=600&q=80',
  },
  {
    id: '2',
    name: 'Kodaikanal',
    subtitle: 'Queen of Hills',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=600&q=80',
  },
  {
    id: '3',
    name: 'Rameshwaram',
    subtitle: 'Coastal area',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=600&q=80',
  },
];

const TOP_HOTELS = [
  {
    id: '1',
    name: 'Caravel Hotel & resorts',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80',
  },
  {
    id: '2',
    name: 'The Home Jungle Hotel & resorts',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&q=80',
  },
  {
    id: '3',
    name: 'Eleven way Multi-Star Hotel',
    rating: '4.7',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80',
  },
  {
    id: '4',
    name: 'Der Spices 5-star Luxury Hotel',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&q=80',
  },
];

// =========================================================================
// 3. MAIN COMPONENT (App.js for Expo Snack)
// =========================================================================
export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedService, setSelectedService] = useState('Flights');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#407BFF" />

      {/* Main Scrollable Canvas */}
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* ========================================================= */}
        {/* 1. BLUE HEADER AREA (Figma Frame 675 / Frame 243)         */}
        {/* ========================================================= */}
        <View style={styles.blueHeaderContainer}>
          {/* Top Bar: Avatar, Search Bar, Notification & Filter Icons */}
          <View style={styles.headerTopRow}>
            {/* User Avatar */}
            <TouchableOpacity style={styles.avatarContainer} activeOpacity={0.8}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80' }}
                style={styles.avatarImage}
              />
            </TouchableOpacity>

            {/* Pill Search Input (Frame 1066: 256 × 28 px) */}
            <View style={styles.searchPill}>
              <Ionicons name="search" size={15} color="#5C5E64" style={{ marginRight: 6 }} />
              <TextInput
                style={styles.searchInput}
                placeholder="Search"
                placeholderTextColor="#B7C9D2"
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>

            {/* Notification Bell with Badge (Frame 249: 28 × 28 px) */}
            <TouchableOpacity style={styles.headerIconButton} activeOpacity={0.8}>
              <Ionicons name="notifications" size={16} color="#407BFF" />
              <View style={styles.notificationDot} />
            </TouchableOpacity>

            {/* Map/Filter Toggle (Frame 263: 28 × 28 px) */}
            <TouchableOpacity style={styles.headerIconButton} activeOpacity={0.8}>
              <Ionicons name="map-outline" size={15} color="#4E9EFD" />
            </TouchableOpacity>
          </View>

          {/* Hero Promo Banner Content (Frame 247) */}
          <View style={styles.heroPromoWrap}>
            <View style={{ flex: 1 }}>
              <Text style={styles.promoHeadline}>Exclusive Travel Deals</Text>
              <Text style={styles.promoSubtitle}>
                Book your next trip at the best prices on flights, hotels, and more
              </Text>

              {/* Action Button: Explore Deals */}
              <TouchableOpacity style={styles.exploreDealsBtn} activeOpacity={0.85}>
                <Text style={styles.exploreDealsText}>Explore Deals</Text>
                <View style={styles.exploreArrowCircle}>
                  <Ionicons name="arrow-forward" size={10} color="#407BFF" />
                </View>
              </TouchableOpacity>
            </View>

            {/* Airline Partner Float Badges & Jet Silhouette */}
            <View style={styles.heroVisualWrap}>
              <View style={styles.airplaneWatermark}>
                <Ionicons name="airplane" size={54} color="rgba(255,255,255,0.22)" />
              </View>
              {/* Partner Badges (IndiGo & AirAsia) */}
              <View style={styles.partnerLogosRow}>
                <View style={styles.partnerLogoBadge}>
                  <Text style={styles.partnerLogoText}>6E</Text>
                </View>
                <View style={[styles.partnerLogoBadge, { marginLeft: -6, backgroundColor: '#FF3B30' }]}>
                  <Text style={[styles.partnerLogoText, { color: '#FFFFFF' }]}>AA</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* ========================================================= */}
        {/* 2. SERVICE QUICK-LINKS (Figma Frame 707 / Frame 681)      */}
        {/* ========================================================= */}
        <View style={styles.servicesElevatedCard}>
          {SERVICE_CATEGORIES.map((cat) => {
            const isSelected = selectedService === cat.name;
            return (
              <TouchableOpacity
                key={cat.id}
                style={[styles.serviceTab, isSelected && styles.serviceTabActive]}
                activeOpacity={0.75}
                onPress={() => setSelectedService(cat.name)}
              >
                <Ionicons
                  name={cat.icon}
                  size={17}
                  color={isSelected ? '#407BFF' : TOKENS.colors.iconMuted}
                />
                <Text
                  style={[
                    styles.serviceLabel,
                    isSelected && { color: '#263238', fontWeight: '700' },
                  ]}
                >
                  {cat.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* ========================================================= */}
        {/* 3. STATUS CARD (Figma Frame 674: 358 × 119 px)            */}
        {/* ========================================================= */}
        <View style={styles.statusCard}>
          {/* Left: Map Preview Snippet (Frame 669) */}
          <View style={styles.statusMapWrap}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&q=80' }}
              style={styles.statusMapImage}
            />
            {/* Map Route Overlay & Blue Pin */}
            <View style={styles.mapPinPulse}>
              <Ionicons name="location-sharp" size={16} color="#407BFF" />
            </View>
            <View style={styles.mapDestDot} />
          </View>

          {/* Right Column: Greeting, Distance & Action (Frame 673) */}
          <View style={styles.statusInfoWrap}>
            <Text style={styles.statusGreeting}>👋 Good Afternoon</Text>
            <Text style={styles.statusDistanceText} numberOfLines={2}>
              Your next Destination is 30 km away
            </Text>

            <View style={styles.statusBottomRow}>
              {/* Amber Destination Tag Pill (Frame 671) */}
              <View style={styles.statusTagPill}>
                <Text style={styles.statusTagText}>Mahabalipuram</Text>
              </View>

              {/* Orange Action Button: "Map" (Frame 325: 81 × 25 px) */}
              <TouchableOpacity style={styles.orangeMapButton} activeOpacity={0.85}>
                <Ionicons name="navigate" size={12} color="#FFFFFF" style={{ marginRight: 4 }} />
                <Text style={styles.orangeMapButtonText}>Map</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* ========================================================= */}
        {/* 4. DEALS CAROUSEL (Figma Frame 676 / Frame 1115)          */}
        {/* ========================================================= */}
        <View style={styles.dealsSection}>
          <View style={styles.sectionHeaderRow}>
            <View>
              <Text style={styles.sectionTitle}>Deals picked just for you</Text>
            </View>
            <TouchableOpacity style={styles.viewAllRow} activeOpacity={0.7}>
              <Text style={styles.viewAllText}>View All</Text>
              <View style={styles.viewAllCircle}>
                <Ionicons name="chevron-forward" size={8} color="#FFFFFF" />
              </View>
            </TouchableOpacity>
          </View>

          {/* Horizontal Deals Carousel */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.dealsCarouselContent}
          >
            {DEALS_LIST.map((deal) => (
              <View key={deal.id} style={styles.dealCard}>
                {/* Top Row: Icon Badge & Partners */}
                <View style={styles.dealCardTopRow}>
                  <View style={[styles.dealIconBadge, { backgroundColor: deal.badgeColor }]}>
                    <Ionicons
                      name={deal.type === 'flight' ? 'airplane' : 'bed'}
                      size={18}
                      color="#FFFFFF"
                    />
                  </View>
                  <View style={styles.dealPartnersRow}>
                    {deal.partners.slice(0, 2).map((p, idx) => (
                      <View key={idx} style={styles.dealMiniPartner}>
                        <Text style={styles.dealPartnerText}>{p[0]}</Text>
                      </View>
                    ))}
                  </View>
                </View>

                {/* Deal Copy */}
                <Text style={styles.dealDiscountText}>{deal.discount}</Text>
                <Text style={styles.dealDescriptionText} numberOfLines={2}>
                  {deal.description}
                </Text>

                {/* Ticket Coupon Container (Frame 687) */}
                <View style={styles.couponContainer}>
                  <Text style={styles.couponPrompt}>Use this coupon get off:</Text>
                  {/* Cutout Ticket Badge */}
                  <View style={[styles.couponTicketPill, { backgroundColor: deal.couponColor }]}>
                    <Text style={styles.couponCodeText}>{deal.coupon}</Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* ========================================================= */}
        {/* 5. DESTINATION HIGHLIGHTS (Figma Frame 700)               */}
        {/* ========================================================= */}
        <View style={styles.destinationSection}>
          <View style={styles.destinationHeader}>
            <Text style={styles.destinationTitle}>Rain, views, and you.</Text>
            <Text style={styles.destinationSubtitle}>
              explore a certain places in tamilnadu with budget of ₹ 5999
            </Text>
          </View>

          {/* Horizontal Destination Cards (Frame 1114) */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.destinationCarousel}
          >
            {DESTINATIONS.map((dest) => (
              <TouchableOpacity
                key={dest.id}
                style={styles.destCard}
                activeOpacity={0.85}
              >
                <Image source={{ uri: dest.image }} style={styles.destImage} />
                <View style={styles.destScrim} />
                <View style={styles.destTextWrap}>
                  <Text style={styles.destName}>{dest.name}</Text>
                  <Text style={styles.destSub}>{dest.subtitle}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* ========================================================= */}
        {/* 6. HOTEL PICKS GRID (Figma Frame 699 / Frame 698)         */}
        {/* ========================================================= */}
        <View style={styles.hotelsSection}>
          <Text style={styles.hotelsHeaderTitle}>Top-tier Hotels Picks For You</Text>

          {/* 2×2 Hotel Grid */}
          <View style={styles.hotelsGrid}>
            {TOP_HOTELS.map((hotel) => (
              <TouchableOpacity
                key={hotel.id}
                style={styles.hotelCard}
                activeOpacity={0.85}
              >
                <Image source={{ uri: hotel.image }} style={styles.hotelImage} />
                <View style={styles.hotelScrim} />

                {/* Rating Badge */}
                <View style={styles.hotelRatingPill}>
                  <Ionicons name="star" size={10} color="#FFB624" />
                  <Text style={styles.hotelRatingText}>{hotel.rating}</Text>
                </View>

                {/* Hotel Title */}
                <Text style={styles.hotelName} numberOfLines={2}>
                  {hotel.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* ========================================================= */}
      {/* 7. BOTTOM NAVIGATION BAR (Figma Frame 1117: 393 × 68 px)  */}
      {/* ========================================================= */}
      <View style={styles.bottomNav}>
        {[
          { id: 'home', label: 'Home', icon: 'home' },
          { id: 'itinerary', label: 'Itinerary', icon: 'calendar-outline' },
          { id: 'explore', label: 'Explore', icon: 'compass-outline' },
          { id: 'trips', label: 'Trips', icon: 'airplane-outline' },
          { id: 'offers', label: 'Offers', icon: 'pricetag-outline' },
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <TouchableOpacity
              key={tab.id}
              style={styles.navTab}
              activeOpacity={0.7}
              onPress={() => setActiveTab(tab.id)}
            >
              <Ionicons
                name={isActive ? tab.icon.replace('-outline', '') : tab.icon}
                size={22}
                color={isActive ? TOKENS.colors.primaryBlue : TOKENS.colors.textMuted}
              />
              <Text
                style={[
                  styles.navLabel,
                  { color: isActive ? TOKENS.colors.primaryBlue : TOKENS.colors.textMuted },
                  isActive && styles.navLabelActive,
                ]}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

// =========================================================================
// 4. STYLES (MATCHED 100% TO FIGMA NODE 132:3 / 132:38 METRICS)
// =========================================================================
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#407BFF', // Matches top notch seamlessly
  },
  container: {
    flex: 1,
    backgroundColor: TOKENS.colors.background,
  },
  scrollContent: {
    paddingBottom: 85, // Space for floating bottom navigation
  },

  // 1. Blue Header Area (Frame 675: 393 × 271 px)
  blueHeaderContainer: {
    backgroundColor: TOKENS.colors.primaryBlue,
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'android' ? 14 : 10,
    paddingBottom: 36,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  headerTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 20,
  },
  avatarContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  searchPill: {
    flex: 1,
    height: 30,
    backgroundColor: TOKENS.colors.surface,
    borderRadius: TOKENS.radii.pill,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 12,
    color: TOKENS.colors.textPrimary,
    fontWeight: '500',
    paddingVertical: 0,
  },
  headerIconButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: TOKENS.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  notificationDot: {
    position: 'absolute',
    top: 6,
    right: 7,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#F7862C',
  },
  heroPromoWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 4,
  },
  promoHeadline: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: -0.3,
  },
  promoSubtitle: {
    fontSize: 11,
    color: 'rgba(255, 255, 255, 0.9)',
    marginTop: 4,
    lineHeight: 15,
    maxWidth: 220,
  },
  exploreDealsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 12,
    alignSelf: 'flex-start',
  },
  exploreDealsText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  exploreArrowCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroVisualWrap: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  airplaneWatermark: {
    position: 'absolute',
    transform: [{ rotate: '-25deg' }],
  },
  partnerLogosRow: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  partnerLogoBadge: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#EFEFEF',
  },
  partnerLogoText: {
    fontSize: 9,
    fontWeight: '800',
    color: '#407BFF',
  },

  // 2. Service Quick-Links (Frame 707: Elevated White Card)
  servicesElevatedCard: {
    marginHorizontal: 16,
    marginTop: -22,
    backgroundColor: TOKENS.colors.surface,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 10,
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  serviceTab: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8,
  },
  serviceTabActive: {
    backgroundColor: '#F3F6FF',
  },
  serviceLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: TOKENS.colors.textSecondary,
  },

  // 3. Status Card (Frame 674: 358 × 119 px)
  statusCard: {
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: TOKENS.colors.statusCardBg,
    borderRadius: TOKENS.radii.card,
    borderWidth: 1,
    borderColor: TOKENS.colors.statusCardBorder,
    padding: 12,
    flexDirection: 'row',
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  statusMapWrap: {
    width: 120,
    height: 94,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#E2E8F0',
  },
  statusMapImage: {
    width: '100%',
    height: '100%',
  },
  mapPinPulse: {
    position: 'absolute',
    top: 24,
    left: 48,
  },
  mapDestDot: {
    position: 'absolute',
    bottom: 24,
    right: 32,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#A0BEFF',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  statusInfoWrap: {
    flex: 1,
    justifyContent: 'space-between',
  },
  statusGreeting: {
    fontSize: 11,
    fontWeight: '600',
    color: '#000000',
  },
  statusDistanceText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#494E58',
    lineHeight: 17,
  },
  statusBottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  statusTagPill: {
    backgroundColor: TOKENS.colors.warmAmber,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  statusTagText: {
    fontSize: 10,
    fontWeight: '700',
    color: TOKENS.colors.warmAmberText,
  },
  orangeMapButton: {
    backgroundColor: TOKENS.colors.accentOrange,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  orangeMapButtonText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  // 4. Deals Carousel (Frame 676 / Frame 1115)
  dealsSection: {
    marginTop: 22,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#444852',
  },
  viewAllRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  viewAllText: {
    fontSize: 12,
    fontWeight: '700',
    color: TOKENS.colors.primaryBlue,
  },
  viewAllCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: TOKENS.colors.primaryBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dealsCarouselContent: {
    paddingHorizontal: 16,
    gap: 12,
  },
  dealCard: {
    width: 224,
    backgroundColor: TOKENS.colors.surface,
    borderRadius: TOKENS.radii.card,
    padding: 14,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  dealCardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  dealIconBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dealPartnersRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dealMiniPartner: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -4,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  dealPartnerText: {
    fontSize: 9,
    fontWeight: '700',
    color: '#555963',
  },
  dealDiscountText: {
    fontSize: 16,
    fontWeight: '800',
    color: TOKENS.colors.primaryBlue,
  },
  dealDescriptionText: {
    fontSize: 10,
    color: '#555963',
    lineHeight: 14,
    marginTop: 3,
    marginBottom: 10,
  },
  couponContainer: {
    backgroundColor: '#F9FAFC',
    borderRadius: 8,
    padding: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#EFEFEF',
  },
  couponPrompt: {
    fontSize: 9,
    fontWeight: '600',
    color: '#263238',
  },
  couponTicketPill: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  couponCodeText: {
    fontSize: 9,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  // 5. Destination Highlights (Frame 700: Rain, views, and you.)
  destinationSection: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  destinationHeader: {
    marginBottom: 12,
  },
  destinationTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#263238',
  },
  destinationSubtitle: {
    fontSize: 11,
    color: '#71797D',
    marginTop: 2,
  },
  destinationCarousel: {
    gap: 12,
  },
  destCard: {
    width: 140,
    height: 160,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#E0E0E0',
  },
  destImage: {
    width: '100%',
    height: '100%',
  },
  destScrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  destTextWrap: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
  },
  destName: {
    fontSize: 14,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  destSub: {
    fontSize: 9,
    color: 'rgba(255,255,255,0.85)',
    marginTop: 2,
  },

  // 6. Hotel Picks Grid (Frame 699 / Frame 698)
  hotelsSection: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  hotelsHeaderTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#3F424A',
    marginBottom: 14,
  },
  hotelsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 12,
  },
  hotelCard: {
    width: '48.2%',
    height: 120,
    borderRadius: TOKENS.radii.card,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#E0E0E0',
  },
  hotelImage: {
    width: '100%',
    height: '100%',
  },
  hotelScrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  hotelRatingPill: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  hotelRatingText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  hotelName: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    right: 8,
    fontSize: 11,
    fontWeight: '700',
    color: '#FFFFFF',
    lineHeight: 15,
  },

  // 7. Bottom Navigation (Frame 1117: 393 × 68 px)
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 64,
    backgroundColor: TOKENS.colors.surface,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    paddingBottom: Platform.OS === 'ios' ? 8 : 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 8,
  },
  navTab: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navLabel: {
    fontSize: 10,
    fontWeight: '500',
    marginTop: 2,
  },
  navLabelActive: {
    fontWeight: '700',
  },
});
