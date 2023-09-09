import { PrettyChatWindow } from 'react-chat-engine-pretty'; // Assuming the component name is 'PrettyChatWindow'

const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId='3f2cc733-16b6-4633-add2-099e47437f7a'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>
    );
};

export default ChatsPage;
