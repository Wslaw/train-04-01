import { useState } from 'react';

import styles from './toggle-button.module.css';

const ToggleButton = ({ text, type }) => {
  const [active, setActive] = useState(false);

  

  const fullClassName = active ? `${styles.active} ${styles.btn}` : styles.btn;

  return (
    <button
      onClick={()=>setActive(prevActive => !prevActive)}
      className={fullClassName}
      type={type}
    >
      {text}
    </button>
  );
};
/*

class ToggleButton extends Component {
    state = {
        active: false,
    }

    handleClick=()=> {
        console.log(this)
        const {active: prevActive} = this.state;
        this.setState({
            active: !prevActive
        })
    }

    render() {
        const {text} = this.props;
        const {active} = this.state;
        console.log(this)
        const fullClassName = active ? `${styles.active} ${styles.btn}` : styles.btn;

        return <button onClick={this.handleClick} className={fullClassName} type="button">{text}</button>
    }
}

*/

export default ToggleButton;
