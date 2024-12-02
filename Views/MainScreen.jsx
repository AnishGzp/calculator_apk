import {Pressable, ScrollView, Text, View} from 'react-native';
import styles from '../Styles/MainScreen';
import React from 'react';

export default function MainScreen() {
  return (
    <View style={styles.mainScreen}>
      <ScrollView style={styles.mainScreen_display}>
        <Text style={styles.mainScreen_display_text}>123</Text>
      </ScrollView>

      <View style={styles.mainScreen_keypad}>
        {/* ================Row 1================== */}

        <View style={styles.mainScreen_keypad_row}>
          <Pressable>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_btn}>AC</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_btn}>( )</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_btn}>%</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_btn}>/</Text>
            </View>
          </Pressable>
        </View>

        {/* ================Row 2================== */}

        <View style={styles.mainScreen_keypad_row}>
          <Pressable>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_btn}>7</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_btn}>8</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_btn}>9</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_btn}>*</Text>
            </View>
          </Pressable>
        </View>

        {/* ================Row 3================== */}

        <View style={styles.mainScreen_keypad_row}>
          <Pressable>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_btn}>7</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_btn}>8</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_btn}>9</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_btn}>*</Text>
            </View>
          </Pressable>
        </View>

        {/* ================Row 4================== */}

        <View style={styles.mainScreen_keypad_row}>
          <Pressable>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_btn}>7</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_btn}>8</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_btn}>9</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_btn}>*</Text>
            </View>
          </Pressable>
        </View>

        {/* ================Row 5================== */}

        <View style={styles.mainScreen_keypad_row}>
          <Pressable>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_btn}>7</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_btn}>8</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_btn}>9</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_btn}>*</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
