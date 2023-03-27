import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')}
`;

const StyledContentsDiv = styled.div`
  width: ${({ mode, percentage }) => (mode === 'percentage' ? `${percentage}%` : 'unset')}
`;

const StyledPercentageDiv = styled.div`
  background: ${({ percentage }) => `linear-gradient(90deg, white ${percentage}%, black ${percentage}%)`};
  display: ${({ open }) => (open ? 'block' : 'none')}
`;
export default function Progress({ mode, open, title, percentage }) {
  return (
    <StyledDiv open={open} className="progress-container">
      <div className={`progress-${mode}-bg`} />
      <div className={`progress-${mode}-wrap`}>
        <div>
          <div className={`progress-${mode}-title`}>{title}</div>
          <div className={`progress-${mode}-box`}>
            <StyledContentsDiv className={`progress-${mode}-contents`} mode={mode} percentage={percentage} />
            <StyledPercentageDiv className="progress-percentage" percentage={percentage}>
              {`${percentage}%`}
            </StyledPercentageDiv>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
}

Progress.propTypes = {
  mode: PropTypes.oneOf(['circle', 'bar']),
  open: PropTypes.bool,
  title: PropTypes.string,
  percentage: PropTypes.number,
};

Progress.defaultProps = {
  mode: 'circle',
  open: false,
  title: '',
  percentage: 0,
};
