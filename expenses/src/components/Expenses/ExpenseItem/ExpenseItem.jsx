import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const title = 'Happy New year';

    const onClick = () => {
        props.updateTitle(title);
    }

    return (
        <div>
            <div>hello world!</div>
            <br/>
            <button onClick={onClick}>Update Title</button>
        </div>
    );
};

export default ExpenseItem;



