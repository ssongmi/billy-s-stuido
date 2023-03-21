import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import data from '../data/KeywordType.json';
import Button from './Button';
import KeyType from '../atom/KeyType';

export default function LeftBar() {
  const [keyword, setKeyword] = useRecoilState(KeyType);

  const handleKeywordClick = useCallback((newKeyword) => {
    setKeyword(newKeyword);
  }, []);

  useEffect(() => console.log(keyword), [keyword]);
  return (
    <div className="left-bar-container">
      <div className="left-bar-wrap">
        {
          data.types.map((item) => (
            <div className={`btn-container ${item.active ? 'active' : 'inactive'}`}>
              <Button
                key={item.type}
                icon={item.type === keyword ? `${item.iconName}_active.svg` : item.icon}
                className="small-icon-btn"
                handleClick={() => handleKeywordClick(item.type)}
              />
            </div>
          ))
        }
      </div>
    </div>
  );
}
