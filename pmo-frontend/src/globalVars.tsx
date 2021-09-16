import { ReactElement } from "react"


export const allianzBlue = "#16549C"

export const getColors = (input: number): string[] => {       // returns grey and green/yellow/red/blue for Big Dot / Doughnut Charts
  const colors = ['#ebedeb'];   // light grey
  if (input === 0) {
    colors.push('#00C49F') // green
  } else if (input === 1) {
    colors.push('#fcd72d') // yellow
  } else if (input === 2) {
    colors.push('#fc0303') // red
  } else if (input === -1) {
    colors.push(allianzBlue) // Allianz blue
  } else {
    colors.push('#ebedeb') // both light grey
  }
  return colors
}

export const getCircle = (input: number, size: number): ReactElement => {
  let color = " bg-success"
  switch (input) {
    case 1:
      color = " bg-waring"
      break
    case 2:
      color = " bg-danger"
      break
    default:
      color: ""
      break
  }
  return (<div className={"justify-content-center mx-auto text-center rounded-circle bg-success" + color} style={{ height: '30px', width: '30px' }} ></div>)
}

export const focusAreaColors = {
  SH: "#fc9003",
  ID: "#03e3fc",
  RD: "#d6a9a9",
  SC: "#c4a9c4",
  BS: "#f2e085",
}

