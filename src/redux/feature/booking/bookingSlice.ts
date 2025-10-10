import { RootState } from '@/redux/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Price and Availability Types
export interface Price {
  amount: number;
  currency: string;
}

export interface Availability {
  start: string;
  end: string;
}

// Activity Enum
export enum Activity {
  DUNE_BASHING = "Dune Bashing",
  CAMEL_RIDE = "Camel Ride",
  QUAD_BIKING = "Quad Biking",
  DUNE_BUGGY_RIDE = "Dune Buggy Ride",
  TEA_COFFEE_SOFT_DRINKS = "Tea, Coffee, & Soft Drinks",
  HENNA_TATTOOS = "Henna Tattoos",
  FIRE_SHOW = "Fire Show in the Desert",
  ARABIC_COSTUMES = "Arabic Costumes",
  SHISHA_SMOKING = "Shisha Smoking",
  FALCON_PICTURES = "Falcon To Take Pictures",
  SAND_BOARDING = "Sand-Boarding",
  BELLY_DANCE_SHOW = "Belly Dance Show",
}

// PackageState Interface
export interface PackageState {
  title: string;
  coverImage: string;
  location: string;
  duration: string;
  max_adult: number;
  child_min_age: number;
  pickup?: string;
  availability: Availability;
  activity?: Activity[];
  adultPrice?: Price;
  childPrice?: Price;
  single_sitter_dune_buggy?: Price;
  four_sitter_dune_buggy?: Price;
  dune_dashing?: Price;
  quad_bike?: Price;
  camel_bike?: Price;
  tea_cofee_soft_drinks?: Price;
  hena_tattos?: Price;
  fire_show?: Price;
  arabic_costume?: Price;
  shisha_smoking?: Price;
  falcon_picture?: Price;
  sand_boarding?: Price;
  belly_dance?: Price;
  discount?: number;
  drop_off?: string;
  note?: string;
  refund_policy?: string;
  included?: string[];
  excluded?: string[];
  tour_plan?: string[];
  description?: string;
  original_price?: Price;
  discount_price?: Price;
  customer_name?: string;
  customer_email?: string;
  customer_phone?: string;
  customer_country?: string;
  pickup_location?: string;
}

// Initial state with default values
const initialState: PackageState = {
  title: '',
  coverImage: '',
  location: '',
  duration: '',
  max_adult: 0,
  child_min_age: 0,
  availability: { start: '', end: '' },
  adultPrice: { amount: 0, currency: '' },
  childPrice: { amount: 0, currency: '' },
  sand_boarding: { amount: 0, currency: '' },
  belly_dance: { amount: 0, currency: '' },
  original_price: { amount: 0, currency: '' },
  discount_price: { amount: 0, currency: '' },
  customer_name: '',
  customer_email: '',
  customer_phone: '',
  customer_country: '',
  pickup_location: ''
};

// Redux slice for PackageState
const packageSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    // Set entire package data in one call
    setPackageData: (state, action: PayloadAction<PackageState>) => {
      const packageData = action.payload;
      state.title = packageData.title;
      state.coverImage = packageData.coverImage;
      state.location = packageData.location;
      state.duration = packageData.duration;
      state.max_adult = packageData.max_adult;
      state.child_min_age = packageData.child_min_age;
      state.availability = packageData.availability;
      state.activity = packageData.activity;
      state.adultPrice = packageData.adultPrice;
      state.childPrice = packageData.childPrice;
      state.single_sitter_dune_buggy = packageData.single_sitter_dune_buggy;
      state.four_sitter_dune_buggy = packageData.four_sitter_dune_buggy;
      state.dune_dashing = packageData.dune_dashing;
      state.quad_bike = packageData.quad_bike;
      state.camel_bike = packageData.camel_bike;
      state.tea_cofee_soft_drinks = packageData.tea_cofee_soft_drinks;
      state.hena_tattos = packageData.hena_tattos;
      state.fire_show = packageData.fire_show;
      state.arabic_costume = packageData.arabic_costume;
      state.shisha_smoking = packageData.shisha_smoking;
      state.falcon_picture = packageData.falcon_picture;
      state.sand_boarding = packageData.sand_boarding;
      state.belly_dance = packageData.belly_dance;
      state.discount = packageData.discount;
      state.drop_off = packageData.drop_off;
      state.note = packageData.note;
      state.refund_policy = packageData.refund_policy;
      state.included = packageData.included;
      state.excluded = packageData.excluded;
      state.tour_plan = packageData.tour_plan;
      state.description = packageData.description;
      state.original_price = packageData.original_price;
      state.discount_price = packageData.discount_price;
      state.customer_name = packageData.customer_name;
      state.customer_email = packageData.customer_email;
      state.customer_phone = packageData.customer_phone;
      state.customer_country = packageData.customer_country;
      state.pickup_location = packageData.pickup_location;
    },

    // Reset all package data to initialState (clear everything)
    resetPackage: () => initialState,
  },
});

// Export actions
export const { setPackageData, resetPackage } = packageSlice.actions;

// Selectors to get data from the state
export const selectPackage = (state: RootState) => state.booking;

export default packageSlice.reducer;
