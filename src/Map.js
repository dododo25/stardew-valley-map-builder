const rows = 65;
const cols = 80;

const defaultTileSize = 16;
const marginSize = 12;

const ComposedMap = () => {
  const tileSize = defaultTileSize * 14 / 16;

  const fullWidth = cols * tileSize + marginSize * 2;
  const fullHeight = rows * tileSize + marginSize * 2;

  return (
    <div className='position-relative pe-none user-select-none' style={{width: fullWidth, height: fullHeight}}>
      <div className='w-100 h-100' style={{backgroundImage: `url(/images/misc/MapBackground.png)`, border: '16px solid', borderImage: `url(/images/misc/MapBorder.png) 16 round`}}></div>
      <div className='position-relative overflow-hidden' style={{width: cols * tileSize, height: rows * tileSize, margin: marginSize, bottom: '100%'}}>
        <div className='w-100 h-100'>
          <div className='position-relative'>
            <img src='/images/farm/default/back.png' alt='map-back' />
          </div>
          <div className='position-relative' style={{zIndex: 10, transform: 'translateY(-100%)'}}>
            <img src='/images/farm/default/front.png' alt='map-front' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComposedMap;
