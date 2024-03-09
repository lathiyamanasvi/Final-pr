import React, { useEffect } from 'react'
import 'jquery-ui-dist/jquery-ui';
import $ from 'jquery'

function NewArrivel() {
	useEffect((val) => {
		$(".hover").mouseleave(
			function () {
				$(this).removeClass("hover");
			}
		);
	}, [])
	return (
		<>
			<div style={{ marginTop: "10%",marginBottom: "10%" }}>
				<h1 className='text-center'>New Arrivel</h1>
				<div className="d-flex">
					<figure class="snip1141"><img src="https://lusion.arrowtheme.com/wp-content/uploads/2020/10/cate-df-1.jpg" alt="sq-sample27" />
						<figcaption>
							<div class="circle"><i class="ion-ios-plus-empty"> </i></div>
							<h2>Accessories</h2>
						</figcaption>
						<a href="#"></a>
					</figure>
					<figure class="snip1141 hover"><img src="https://lusion.arrowtheme.com/wp-content/uploads/2020/10/cate-df-3.jpg" alt="sq-sample14" />
						<figcaption>
							<div class="circle"><i class="ion-ios-plus-empty"> </i></div>
							<h2>Clothing</h2>
						</figcaption>
						<a href="#"></a>
					</figure>
					<figure class="snip1141"><img src="https://lusion.arrowtheme.com/wp-content/uploads/2020/10/cate-df-4.jpg" alt="sq-sample17" />
						<figcaption>
							<div class="circle"><i class="ion-ios-plus-empty"> </i></div>
							<h2>Shoes</h2>
						</figcaption>
						<a href="#"></a>
					</figure>
					<figure class="snip1141"><img src="https://amiy.wpengine.com/wp-content/uploads/2023/10/Amiy-faq-aside-image.jpg" alt="sq-sample17" />
						<figcaption>
							<div class="circle"><i class="ion-ios-plus-empty"> </i></div>
							<h2>Cosmetic</h2>
						</figcaption>
						<a href="#"></a>
					</figure>
				</div>
			</div>
		</>

	)
}

export default NewArrivel
