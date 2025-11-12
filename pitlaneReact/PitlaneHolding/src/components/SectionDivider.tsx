import React from 'react'

interface SectionDividerProps {
  fromColor?: string
  toColor?: string
  height?: string
}

const SectionDivider: React.FC<SectionDividerProps> = ({
  fromColor = 'transparent',
  toColor = 'black',
  height = 'h-40'
}) => {
  return (
    <div
      className={`w-full ${height} pointer-events-none bg-gradient-to-b`}
      style={{
        backgroundImage: `linear-gradient(to bottom, ${fromColor}, ${toColor})`
      }}
    />
  )
}

export default SectionDivider
