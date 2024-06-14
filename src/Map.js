const tileSize = 16;
const borderSize = 12;

const ComposedMap = () => {
  const fullWidth = 80 * tileSize + borderSize * 2;
  const fullHeight = 65 * tileSize + borderSize * 2;

  const rootCompStyle = {
    width: fullWidth, 
    height: fullHeight, 
    backgroundImage: `url(/images/misc/MapBackground.png)`, 
    border: '16px solid', 
    borderImage: `url(/images/misc/MapBorder.png) 16 round`
  }

  return (
    <div style={rootCompStyle}>
      <div style={{margin: -4}}>
        <div className='position-absolute'>
          <img src='/images/farm/default/back.png' alt='map-back' />
        </div>
        <div className='position-relative' style={{zIndex: 10}}>
          <img src='/images/farm/default/front.png' alt='map-front' />
        </div>
      </div>
    </div>
  );
};

export default ComposedMap;
