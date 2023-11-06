import {useLocation} from 'react-router-dom'
import {TransitionGroup,CSSTransition} from "react-transition-group";



const Layout1Route = () => {

    let location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition
            // key={location.key}
            classNames="fade"
            timeout={300}
            >
                {/*<Switch  location={location}>
                   
                    <Route path="/pricing-plan-1"           component={Pricing} />

                     App
                    <Route path="/manage-profile"           component={UserProfile} />
                    <Route path="/setting"                  component={UserAccountSettingList} />
                   
                     Blog
                    <Route path="/blog"                     component={Blog} />
                    <Route path="/blog-details"             component={BlogDetail} />
                    
                     Extrapages
                    <Route path="/faq"                      component={FAQ} />
                    <Route path="/terms-of-service"         component={TermsOfUse} />
                    <Route path="/privacy-policy"           component={PrivacyPolicy} />
                    <Route path="/about-us"                 component={AboutUs}/>
                    <Route path="/contact"                  component={Contact}/>
                    <Route path="/pricing-plan-2"           component={PricingPlan2}/>
                   
                     Category
                    <Route path="/show-category"            component={CategoryList}/>
                    
                     Movie
                    <Route path="/movie-details"            component={AddMovie}/>
                    <Route path="/movie-category"           component={MovieList}/>

                     Show
                    <Route path="/show-details"             component={ShowList}/>
                
                     homepage
                    <Route path="/" exact                   component={Homepage}/>

                </Switch>*/}
            </CSSTransition>
        </TransitionGroup>
    )
}

export default Layout1Route