<?php

namespace MediaWiki\Widget;

use OOUI\MultilineTextInputWidget;

/**
 * Widget to select multiple titles.
 *
 * @copyright 2017 MediaWiki Widgets Team and others; see AUTHORS.txt
 * @license MIT
 */
class TitlesMultiselectWidget extends \OOUI\Widget {

	protected $titlesArray = [];
	protected $inputName = null;
	protected $inputPlaceholder = null;
	protected $limit = null;
	protected $showMissing = null;

	/**
	 * @param array $config Configuration options
	 *   - array $config['titles'] Array of titles to use as preset data
	 *   - array $config['placeholder'] Placeholder message for input
	 *   - array $config['name'] Name attribute (used in forms)
	 *   - number $config['limit'] Maximum number of selected titles
	 *   - bool $config['showMissing'] Show missing pages
	 */
	public function __construct( array $config = [] ) {
		parent::__construct( $config );

		// Properties
		if ( isset( $config['default'] ) ) {
			$this->titlesArray = $config['default'];
		}
		if ( isset( $config['name'] ) ) {
			$this->inputName = $config['name'];
		}
		if ( isset( $config['placeholder'] ) ) {
			$this->inputPlaceholder = $config['placeholder'];
		}
		if ( isset( $config['limit'] ) ) {
			$this->limit = $config['limit'];
		}
		if ( isset( $config['showMissing'] ) ) {
			$this->showMissing = $config['showMissing'];
		}

		$textarea = new MultilineTextInputWidget( [
			'name' => $this->inputName,
			'value' => implode( "\n", $this->titlesArray ),
			'rows' => 10,
		] );
		$this->appendContent( $textarea );
		$this->addClasses( [ 'mw-widgets-titlesMultiselectWidget' ] );
	}

	protected function getJavaScriptClassName() {
		return 'mw.widgets.TitlesMultiselectWidget';
	}

	public function getConfig( &$config ) {
		if ( $this->titlesArray !== null ) {
			$config['selected'] = $this->titlesArray;
		}
		if ( $this->inputName !== null ) {
			$config['name'] = $this->inputName;
		}
		if ( $this->inputPlaceholder !== null ) {
			$config['placeholder'] = $this->inputPlaceholder;
		}
		if ( $this->limit !== null ) {
			$config['limit'] = $this->limit;
		}
		if ( $this->showMissing !== null ) {
			$config['showMissing'] = $this->showMissing;
		}

		$config['$overlay'] = true;
		return parent::getConfig( $config );
	}

}
