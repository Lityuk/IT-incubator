import React from 'react'

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

// type PropsType = {
//     avatar: string;
//     name: string;
//     message: string;
//     time: string;
// }

function HW1(props: any) {
    return (
        <div>
            <hr/>
            homeworks 1

            <div className="wrapper">
                <div>imag</div>
                <div>text</div>
            </div>

            {/*should work (должно работать)*/}
            {/*<Message*/}
            {/*    avatar={messageData.avatar}*/}
            {/*    name={messageData.name}*/}
            {/*    message={messageData.message}*/}
            {/*    time={messageData.time}*/}
            {/*/>*/}

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
