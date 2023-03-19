import { useEffect } from 'react';
import data from "../data/KeywordType.json";
import Button from './Button';

export default function LeftBar() {
  return(
    <div className="left-bar-container">
      <div className="left-bar-wrap">
        {
          data.types.map((item) =>
            <div className={`btn-container ${item.active ? 'active' : 'inactive'}`}>
              <Button
                key={item.type}
                icon={item.active ? `${item.icon}_active` : item.icon}
                className="small-icon-btn"
              />
            </div>
          )
        }
      </div>
    </div>
  );
}