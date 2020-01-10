import React from 'react'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input'

class FriendsList extends React.Component {
    render() {
        return (
            <div className="friends-list"
                st>
                <form>
                    <Input
                        type="text"
                        placeholder="Friends"
                        required />
                    <Button id="create-room-btn" type="submit">+</Button>
                </form>
            </div>
        )
    }
}

export default FriendsList