import React, { useState } from "react";
import {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonAvatar, IonIcon, IonicSwiper, IonLabel, IonChip, IonCard,
    IonCardContent,
    IonImg,
    IonCardHeader,
    IonFooter
} from '@ionic/react';
import { images, film, videocam, happy, peopleCircle, tv, ellipse, heart, checkmarkCircle, thumbsUpOutline, thumbsUp, chatbox, shareSocial, giftSharp } from 'ionicons/icons';
import style from './Cardstatus.module.css'
import avatar from '../../img/avatar.jpg'
import ModalImage from '../ModalImage'

function Cardstatus(props) {
    const data = props.data
    // console.log(data);
    const [open, setOpen] = useState(false)
    const closeImage = () => {
        setOpen(false)
    }

    return (
        <React.Fragment>
            <ModalImage open={open} closeImage={closeImage} data={data} />
            <IonCard>
                <IonCardHeader style={{ padding: 'unset' }}>
                    <IonGrid>
                        <IonRow>
                            <IonCol size={2}>
                                <IonAvatar className={style.card_avatar}>
                                    <img src={data.avata} />
                                </IonAvatar>
                            </IonCol>
                            <IonCol size={10}>
                                <div className={style.card_tick_blue}>
                                    <strong>{data.name}</strong><IonIcon className={style.icon_tick_custom} icon={checkmarkCircle} />
                                </div>
                                <IonIcon className={style.card_icon_color} icon={heart} />
                            </IonCol>
                        </IonRow>
                        <span>Chúc Mừng Sinh Nhật <strong>Nhàn Nguyễn</strong></span><IonIcon className={style.icon_gift_custom} icon={giftSharp} />
                    </IonGrid>
                </IonCardHeader>
                <IonCardContent style={{ padding: 'unset' }} onClick={() => { setOpen(true) }}>
                    <IonImg src={data.img} />
                </IonCardContent>
                <IonFooter>
                    <div className={style.footer_status_custom}>
                        <IonIcon className={style.icon_custom_like} icon={thumbsUpOutline} />
                        <IonIcon className={style.icon_custom_tym} icon={heart} />
                        <span style={{ marginLeft: '5px' }}>99K</span>
                        <div style={{ marginLeft: 'auto' }}>
                            <span style={{ paddingRight: '15px' }}>99K comment</span>
                            <span>99K share</span>
                        </div>
                    </div>
                    <div className={style.under_line}></div>
                    <div className={style.padding_25}>
                        <div style={{ display: 'flex', alignItems: 'center', margin: 'auto' }}>
                            <IonIcon className={style.icon_custom} icon={thumbsUp} />
                            <span style={{ paddingLeft: '5px' }}>Like</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', margin: 'auto' }}>
                            <IonIcon className={style.icon_custom} icon={chatbox} />
                            <span style={{ paddingLeft: '5px' }}>Comment</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', margin: 'auto' }}>
                            <IonIcon className={style.icon_custom} icon={shareSocial} />
                            <span style={{ paddingLeft: '5px' }}>Share</span>
                        </div>
                    </div>
                </IonFooter>
            </IonCard>
        </React.Fragment>
    )
}
export default Cardstatus;