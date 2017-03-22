// function Welcome(props) {
// 	//创建一个Welcome组件
// 	return <h1>Hello,{props.name}</h1>;
// }
// function App(){
// 	return (
// 		<div>
// 			<Welcome name='Sara'/>
// 			<Welcome name='Cahal' />
// 			<Welcome name='Edite' />
// 		</div>
// 	);
// }


// // const element = <Welcome name="Sara" />;
// ReactDOM.render(
// 	<App />,//调用App组件
// 	document.getElementById('example')
// );
//----------------------------------
/*
function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props){
	return (
		<img className="Avatar"
				   src={props.user.avatarUrl} 
			       alt={props.user.name} />
	);
}
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

ReactDOM.render(
	<Comment 
		date={comment.date}
		text={comment.text}
	  author={comment.author} />,
	document.getElementById('example')
	)
*/
//-------------------------------------
//-----------------------------------------
/*
function tick(){
	const element = (
		<div>
			<h1>Helo,world!</h1>
			<h2>It is {new Date().toLocaleTimeString()}.</h2>
		</div>
	);
	ReactDOM.render(
		element,
		document.getElementById('example')
	);
}
tick();
setInterval(tick, 1000);
*/
//----------------------------------------
// function Clock(props){
// 	return(
// 		<div>
// 			<h1>Helo,world!</h1>
// 			<h2>It is {props.date.toLocaleTimeString()}.</h2>
// 		</div>
// 	);
// }
//-------------加入状态============
// class Clock extends React.Component{
// 	constructor(props) {
// 		super(props);
// 		this.state = {date:new Date()};
// 	}

// 	componentDidMount(){
// 		this.timerID = setInterval(
// 			()=>this.tick(),
// 			1000
// 		);
// 	}

// 	componentWillUnmount(){
// 		clearInterval(this.timerID);
// 	}
// 	tick() {
// 		this.setState({
// 			date:new Date()
// 		});
// 	}
// 	render(){
// 		return (
// 			<div>
// 				<h1>Helo,world</h1>
// 				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
// 			</div>
// 		);
// 	}
// }
// 	ReactDOM.render(
// 		<Clock />,
// 		document.getElementById('example')
// );
//--------------------=============
//--------------event handle=========
// class Toggle extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.state ={isToggleOn:true};

// 		this.handleClick = this.handleClick.bind(this);
// 	}
// 	handleClick(){
// 		this.setState(prevState => ({
// 				isToggleOn: !prevState.isToggleOn
// 			}));
// 	}
// 	render(){
// 		return (
// 			//另一种方法为:<button onClick={(e) => this.handleClick(e)}>
// 			<button onClick={this.handleClick}>
// 				{this.state.isToggleOn ? 'ON' : 'OFF'}
// 			</button>
// 		);
// 	}
// }
// ReactDOM.render(
// 	<Toggle />,
// 	document.getElementById('example')
// );
//----------------------------============
//------------条件渲染=================
// function UserGreeting(){
// 	return <h1>Welcome back!</h1>
// }
// function GuestGreeting(){
// 	return <h1>Please sign up.</h1>
// }

// function Greeting(props){
// 	const isLoggedIn = props.isLoggedIn;
// 	if(isLoggedIn){
// 		return <UserGreeting />;
// 	}
// 	return <GuestGreeting/>;
// }
// ReactDOM.render(

// 	<Greeting isLoggedIn={false}/>,
// 	document.getElementById('example')
// )
//-------------------------------
// function UserGreeting() {
// 	return <h1>Welcome back!</h1>
// }

// function GuestGreeting() {
// 	return <h1>Please sign up.</h1>
// }

// function Greeting(props) {
// 	const isLoggedIn = props.isLoggedIn;
// 	if (isLoggedIn) {
// 		return <UserGreeting />;
// 	}
// 	return <GuestGreeting/>;
// }

// function LoginButton(props) {
// 	return (
// 		<button onClick={props.onClick}>
// 			Login
// 		</button>
// 	);
// }

// function LogoutButton(props) {
// 	return (
// 		<button onClick={props.onClick}>
// 			Logout	
// 		</button>
// 	);
// }

// class LoginControl extends React.Component {

// 	constructor(props) {
// 		super(props);

// 		this.handleLoginClick = this.handleLoginClick.bind(this);
// 		this.handleLogoutClick = this.handleLogoutClick.bind(this);
// 		this.state = {
// 			isLoggedIn: false
// 		};
// 	}

// 	handleLoginClick() {
// 		this.setState({
// 			isLoggedIn: true
// 		});
// 	}

// 	handleLogoutClick() {
// 		this.setState({
// 			isLoggedIn: false
// 		});
// 	}

// 	render() {
// 		const isLoggedIn = this.state.isLoggedIn;

// 		let button = null;

// 		if (isLoggedIn) {
// 			button = <LogoutButton onClick = {this.handleLogoutClick} />;
// 		} else {
// 			button = <LoginButton onClick = {this.handleLoginClick} />;
// 		}
// 		return (
// 			<div>
// 				<Greeting isLoggedIn={isLoggedIn} />
// 				{button}
// 			</div>
// 		)
// 	}

// }

// ReactDOM.render(
// 	<LoginControl />,
// 	document.getElementById('example')
// )
//=----------------------------------
// class MyTitle extends React.Component {
// 	render() {
// 		return (
// 			<h1>Helo,world</h1>
// 		)
// 	}
// };
// var arr = [
// 	<h1>Helo,world</h1>,
// 	<h2>React is awesome</h2>
// ];
// ReactDOM.render(
// 	<div>{arr}</div>,
// 	document.getElementById('example')
// )
//React.Component sub class
//-----------------===================
// const exf = {
// 	test() {
// 		alert('ok test mixins!' + ' ' + this.props.group);
// 	}
// }

// const Item = React.createClass({
// 	dataName: 'Item',
// 	getDefaultProps() {
// 		return {
// 			group: 'javascript'
// 		}
// 	},
// 	mixins: [exf], //不同组件之间共同某些功能
// 	render() {
// 		return (
// 			<div>{this.props.group}
// 				<button onClick={this.test}>点击</button>
// 			</div>
// 		)
// 	}
// })
//ES6
// class Item extends React.Component {
// 	constructor(props) {
// 		super(props); //继承props
// 		this.state = {
// 			//等价于getIntialState
// 			result: '123'
// 		}
// 	}
// 	static get defaultProps() {
// 		//getDefaultProps
// 		return {
// 			group: 'javascript'
// 		}
// 	}

// 	test() {

// 			alert('ok test mixins!' + this.props.group);
// 		}
// 		//ES6不支持混合 mixin[]
// 	render(info) {
// 		return (
// 			<div>{this.props.group}
// 		<button onClick={this.test.bind(this)}>{this.state.result}</button>
// 			</div>
// 		)
// 	}
// }

// ReactDOM.render(
// 	<Item group='hello'/>,
// 	document.getElementById('example')
// )
//==============================

// const Item = React.createClass({
// 	displayName: 'Item',

// 	getDefaultProps() {
// 		console.log('get default props!');
// 		return {
// 			group: 123
// 		}
// 	},

// 	getInitialState() {
// 		console.log('get initial state!');
// 		return {
// 			name: 'leo'
// 		}
// 	},

// 	componentWillMount() {
// 		this.state.name = 'liang';
// 		console.log('component will mount!');
// 	},
// 	componentDidMount() {
// 		const dom = ReactDOM.findDOMNode(this);
// 		console.log('component did mount!');
// 		console.log(dom);
// 		let red = false;
// 		dom.style.backgroundColor = 'red';
// 		// dom.style.backgroundColor = 'red';
// 		this.state.timerID = setInterval(function() {
// 			if (red) {
// 				dom.style.backgroundColor = 'yellow';
// 				red = false;
// 			} else {
// 				dom.style.backgroundColor = 'red';
// 				red = true;
// 			}
// 		}, 1000)
// 	},
// 	componentWillUpdate(nextProps, nextState) {
// 		console.log('component will update');
// 	},
// 	componentDidUpdate(prevProps, prevState) {
// 		console.log('component did update');
// 	},
// 	shouldComponentUpdate(nextProps, nextState) {
// 		console.log('should component update');
// 		return true;
// 	},
// 	componentWillReceiveProps(nextProps) {
// 		console.log('component will receive props');
// 	},
// 	update() {
// 		this.setState({
// 			name: 'zeng'
// 		});
// 		// this.forceUpdate();
// 	},
// 	render() {
// 		console.log('render');
// 		return <div>
// 					{this.props.group + this.state.name}
// 					<button onClick={this.update}>update</button>
// 				</div>
// 	},
// 	componentWillUnmount() {
// 		console.log('component will unmount');
// 		clearInterval(this.state.timerID);
// 	}
// });

// function render(bool) {
// 	ReactDOM.render(
// 		<div>
// 			<Item/>
// 			{bool ? <Item/>: ''}
// 		</div>, document.getElementById('example')
// 	);
// }
// // const List = React.createClass({
// // 	render() {
// // 		return <div>
// // 			<Item />
// // 		</div>
// // 	}
// // })
// render(true);
// render(false);
// render(true);
// render(false);

// document.getElementById('cln').onclick = function() {
// 	render();
// };
//===============
const Comp = React.createClass({
	click() {
		this.refs.myinput.focus();
	},
	render() {
		return (
			<div>
					<input ref={function(dom){dom.focus();}}/>
					<button onClick={this.click}>click me!</button>
				</div>
		)
	}
});
ReactDOM.render(
	<Comp/>,
	document.body
);