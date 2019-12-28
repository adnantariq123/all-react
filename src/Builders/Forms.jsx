import React, { Component } from 'react'
import axios from 'axios'

//take directly from https://www.youtube.com/watch?v=x9UEDRbLhJE&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=43
class PostForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			userId: '',
			title: '',
			body: ''
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
            .post('https://jsonplaceholder.typicode.com/posts', this.state)
            //the post takes two parameters, first where is it sending , and second is what is the data to be sent
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const { userId, title, body } = this.state
		return (
            <div className="container">
            <div className="row">
                <div className="col-12">
				<form onSubmit={this.submitHandler}>
					<div>
						<input
							type="text"
							name="userId"
							value={userId}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="title"
							value={title}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="body"
							value={body}
							onChange={this.changeHandler}
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
            </div>
            </div>
		)
	}
}

export default PostForm