import React from "react";

class CreatePostForm extends React.Component {
    state = {
        title: '',
        body: '',
        userId: 11
    };

    clearFields = () =>
        this.setState({
            title: '',
            body: ''
        });

    addPost = event => {
        event.preventDefault();

        const {onSubmit} = this.props;
        const {title, body, userId} = this.state;

        if (title.length || body.length) {
            onSubmit({title, body, userId}, this.clearFields);
        }
    };

    handleChange = stateField => ({target: {value}}) =>
        this.setState({
            [stateField]: value
        });

    render() {
        const {title, body} = this.state;

        return (
            <form className="my-create-post">
                <input
                    placeholder="Enter post`s title"
                    value={title}
                    onChange={this.handleChange('title')}
                />
                <textarea
                    placeholder="Enter your post"
                    value={body}
                    onChange={this.handleChange('body')}
                />
                <button onClick={this.addPost}>Create Post!</button>
            </form>
        );
    }
}

export default CreatePostForm;