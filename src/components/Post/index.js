import React  from "react";
import './Post.css'

class Post extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const nickname = this.props.nickname
        const avatar = this.props.avatar;
        const image = this.props.image;
        const caption = this.props.caption;
        return(
            // <section className="container">
            <div>
                <div className="article_container">
                    {/* Post  */}
                    <article className="Post">
                        {/* 아바타 사진 + 닉네임 */}
                        <div className="Post_header">
                            <a href="#" className="user_picture">
                                <img src={avatar} alt={nickname} />
                            </a>
                            <a href="#" className="user_name">
                                <span>{nickname}</span>
                            </a>
                        </div>
                        {/* 사진 */}
                        <div className="Post_cont">
                            <div className="cont" role="button">
                                <div className="img_cont">
                                    <img alt="{caption}" src={image} />
                                </div>
                            </div>
                        </div>
                        {/* 댓글 창 */}
                        <div className="Post_bot">
                            <section className="bot_button">
                                <span className="btn1">
                                    <button className="btn">
                                        <span aria-label="좋아요" className="sprite_heart_gray block"></span>
                                    </button>
                                </span>
                                <span className="btn2">
                                    <button className="btn">
                                        <span aria-label="댓글 달기" className="sprite_comment_gray block"></span>
                                    </button>
                                </span>
                                <span className="btn3">
                                    <button className="btn">
                                        <span aria-label="게시물 공유" className="sprite_share_gray block"></span>
                                    </button>
                                </span>
                                <span className="btn4">
                                    <button className="btn">
                                        <span aria-label="저장" className="sprite_save_gray block"></span>
                                    </button>
                                </span>
                            </section>
                            <section>1</section>
                            <div>1</div>
                            <div>1</div>
                            <section>댓글달기</section>
                        </div>
                        <div className="Post_rightUp">
            
                        </div>
                    </article>
                </div>
                {/* 컴포넌트로 생성 */}
                {/* <div className="side_container">
                    <div className="side_name">1</div>
                    <div className="side_story">1</div>
                    <div className="side_recommendation">1</div>
                    <div className="side_info">1</div>
                </div> */}
            </div>
        )
    }
}
export default Post;