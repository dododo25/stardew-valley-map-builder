import { useRef, useState } from 'react';
import './Map.css';

const rows = 65;
const cols = 80;

const defaultTileSize = 16;
const marginSize = 12;

const ComposedMap = () => {
  const mapRef = useRef(null);

  const [mapActive, setMapActive] = useState(false);
  const [xShift, setXShift] = useState(0);
  const [yShift, setYShift] = useState(0);

  const scaleFactor = 12 / 16;
  const tileSize = defaultTileSize * scaleFactor;

  const fullWidth = cols * tileSize + marginSize * 2;
  const fullHeight = rows * tileSize + marginSize * 2;

  const mapWidth = cols * defaultTileSize;
  const mapHeight = rows * defaultTileSize;

  const onMouseDown = e => {
    if (e.button !== 0) {
      return;
    }

    setMapActive(true);
  };

  const onMouseMove = e => {
    if (mapActive) {
      setXShift(xShift + e.movementX);
      setYShift(yShift + e.movementY);
    }
  };

  const onMouseUp = () => {
    setMapActive(false);
  };

  return (
    <div className='position-relative overflow-hidden pe-none user-select-none' style={{width: fullWidth, height: fullHeight}}>
      <div className='w-100 h-100' style={{backgroundImage: `url(/images/misc/MapBackground.png)`, border: '16px solid', borderImage: `url(/images/misc/MapBorder.png) 16 round`}}></div>
      <div ref={mapRef} className={`map-container${mapActive ? ' active' : ''} position-relative overflow-hidden pe-auto`} style={{width: cols * tileSize, height: rows * tileSize, margin: marginSize, bottom: '100%'}} onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseMove={onMouseMove}>
        <div className='pe-none' style={{width: mapWidth, height: mapHeight, transform: `translate(${xShift}px, ${yShift}px) scale(${scaleFactor})`}}>
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
