import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function App() {

  const [squareBackground, setSquareBackground] = useState("#85d0a8")
  const [circleBackground, setCircleBackground] = useState("#e089e9")
  const [rectangleBackground, setRectangleBackground] = useState("#c79248")
  const [backgroundColor, setBackgroundColor] = useState("#a4bfec")

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF"
    let color = "#"

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random()*16)]
    }
    
    return color
  }

  const chageSquareBg = () => {
    setSquareBackground(generateColor())
  }

  const changeCirclebg = () => {
    setCircleBackground(generateColor())
  }

  const changeRectanglebg = () => {
    setRectangleBackground(generateColor())
  }

  const changeBg = () => {
    setBackgroundColor(generateColor())
  }

  const resetColors = () => {
    setSquareBackground("#85d0a8")
    setCircleBackground("#e089e9")
    setRectangleBackground("#c79248")
    setBackgroundColor("#a4bfec")
  }
  
  return (
    <>
    <StatusBar backgroundColor={"#212121"} />
      <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <TouchableOpacity onPress={chageSquareBg}>
        <View style={[styles.actionSquareBtn, {backgroundColor: squareBackground}]}>
          <Text style={styles.scquareBtnTxt}>Square</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={changeCirclebg}>
        <View style={[styles.actionCircleBtn, {backgroundColor: circleBackground}]}>
          <Text style={styles.circleBtnTxt}>Circle</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={changeRectanglebg}>
        <View style={[styles.actionRectangleBtn, {backgroundColor: rectangleBackground}]}>
          <Text style={styles.rectangleBtnTxt}>Rectangle</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={changeBg}>
        <View style={styles.clickBtn}>
          <Text style={styles.clickBtnTxt}>Change Background</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={resetColors}>
        <View style={styles.clickBtn}>
          <Text style={styles.clickBtnTxt}>Reset</Text>
        </View>
      </TouchableOpacity>

      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    alignItems: 'center',
  },
  actionSquareBtn: {
    height: 150,
    width: 150,
    marginTop: 30,
    backgroundColor: "#212121",
    justifyContent: 'center',
    alignItems: 'center'
  },
  scquareBtnTxt: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase'
  },
  actionCircleBtn: {
    height: 150,
    width: 150,
    borderRadius: 150/2,
    backgroundColor: "#641B4D",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  circleBtnTxt: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
  },
  actionRectangleBtn: {
    height: 150,
    width: 250,
    marginTop: 30,
    backgroundColor: "#212121",
    justifyContent: 'center',
    alignItems: 'center'
  },
  rectangleBtnTxt: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase'
  },
  clickBtn: {
    backgroundColor: "#641B4D",
    borderRadius: 6,
    marginTop: 30
  },
  clickBtnTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    padding: 8
  },
})