import React, { Component } from 'react'

import Header from './header.js'
import FAQ from './faq.js'
import Footer from './footer.js'

class About extends Component {
	render(){
		return(
			<div>
				<Header />
			<div className="row" id="featured-2">
				  <div className="col-sm-8">
				    <h2>Welcome to 3DRM, the blockchain-based Web 3.0 database of 3D artifacts. </h2>
				  </div>
				</div>
                <div id="space50"></div>
				<div className="row aboutintro" id="about">
          <div className="col-sm-12">
						<h3>About 3DRM</h3>
				    <div id="reddiv"></div>
          </div>
				  <div className="col-sm-6">
            <p>3DRM is a publishing platform tailored for 3D content, made for the content-addressable web.  With it you can protect, publish, and even monetize your work anywhere on the web.</p>
					</div>
				  <div className="col-sm-6">
            <p>Safely publish your work to the Interplanetary File System, then secure your terms and process payments via blockchain.</p>
          </div>
				</div>
				<div className="row" id="about">
				  <div className="col-sm-6">
				    <div>
				      <h3>All the tools you need to authenticate, publish, and license your 3D files.</h3>
				      <div id="reddiv"></div>
				      <p>I3DRM is not a marketplace, so you keep more of your revenue.  It’s not a storage center, so we don’t own your files.  It’s not a walled-garden, so you’re free to host and sell anywhere.
							<p>So what is it?  It’s a publishing platform you can use to:</p>
							<ls>
								<li>Set licensing terms how you want.  Use open source licenses, or charge a fee.  It’s up to you.</li>
								<li>Notarize your license, download location, and more using blockchain.  Once published, your terms cannot be altered or destroyed.</li>
								<li>Host your files on the Interplanetary Filing System.  Make use of distributed storage to keep your files away from centralized control.</li>
								<li>A useful first step to copyrighting your work. Licensed  files can be used by the US Copyright office as proof of published work.</li>
							</ls>
             <a className="browse" href="/challenges">View challenges <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
				    </div>
				  </div>
          <div className="col-sm-6">
						<img src="/src/assets/img/challenges.png"/>
					</div>
				</div>
				<div className="row aboutintro" id="about">
				  <div className="col-sm-6">
              <h3>Built with Blockchain</h3>
				      <div id="reddiv"></div>
							<p>ETDB is an experiment in distributing large scientific datasets using the OIP specification. The addresses of the tomograms, and their corresponding metadata, are stored in the public FLO blockchain and the tomogram files are stored in the IPFS network. While etdb.caltech.edu offers one way to access the database, users are free to create their own applications to retrieve and interact with the data.</p>

							<p> A blockchain uses peer-to-peer networking to achieve network consensus without central points of failure, making it a public digital ledger which anyone can contribute to or audit, and no one can alter.</p>
					</div>
				  <div className="col-sm-6">
				    <div>
							<p>The <a target="blank" href="https://ipfs.io/">Inter Planetary File System (IPFS)</a> is a file transport protocol and network designed to create a content-addressable, peer-to-peer method of storing and sharing content in a distributed file system.</p>

							<p>The <a target="blank" href="https://oip.wiki/Main_Page">Open Index Protocol (OIP)</a> specification defines standard use of these technologies; it uses the <a target="blank" href="https://flo.cash">FLO blockchain</a> to index metadata and IPFS to store files. The OIP system includes a transparent index, persistent file storage and permissionless access. The result is a robust, decentralized database open to anyone through open-source software.</p>
				    </div>
				  </div>
				</div>
				<div className="row" id="about">
				  <div className="col-sm-6">
            <img src="/src/assets/img/labshot.png"/>
				  </div>
					<div className="col-sm-6"> <div>
						<h3>Learning more</h3>
						<div id="reddiv"></div>
							<p>If you are interested in learning more about electron tomography, this database, or other research conducted by the Jensen Lab please <a href="/contact">get in touch</a></p>
							<p>Many of these datasets have been used in studies resulting in scientific publications. You can view a list of these publications on the <a target="blank" href="http://www.jensenlab.caltech.edu/publications">Jensen Lab</a> website.</p>
							<a className="browse" href="http://www.jensenlab.caltech.edu">Jensen Lab <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
					</div>
					</div>
				</div>
				<a name="FAQ"></a>
        <FAQ Core={this.props.Core} />
				<Footer />
			</div>
		)
	}
}

export default About;