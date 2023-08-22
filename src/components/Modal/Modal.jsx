import {Modal , Tabs, message} from 'antd';
import SignIn from '/SignIn';
import SignUp from '/SignUp';

const {TabPane} = Tabs;

const ModalUI = () => {
    

    
    const {visible, onOKAuthModal, onCancelAuthModal} = this.props;
    return ( 
        <div>
                <Modal
                visible={visible}
                footer={false}
               
                
                onOk={onOKAuthModal}
                onCancel={onCancelAuthModal}
                >
                    <Tabs activeKey={this.state.active} onChange={this.callback}>
                        <TabPane tab="ĐĂNG NHẬP" key="1">
                            {
                                this.state.active === "1"?<SignIn onSignIn={this.handleSignIn.bind(this)}
                                onSignInNowClick={this.callback}
                                loginFb={this.handleLoginFb.bind(this)}
                                ></SignIn>:null
                            }
                            
                        </TabPane>
                        <TabPane tab="ĐĂNG KÝ" key="2">
                            {
                                this.state.active === "2"?<SignUp onSignUp={this.handleSignUp.bind(this)}></SignUp>:null
                            }
                            
                        </TabPane>
                        {/* <TabPane tab="" key="3">
                            {
                                this.state.active === "3"?<ForgetPassword onForgot={this.handleForgotPassword.bind(this)}>

                                </ForgetPassword>:null
                            }   
                        </TabPane> */}
                    </Tabs>
                </Modal>
                
          </div>
     );
}
 
export default ModalUI;