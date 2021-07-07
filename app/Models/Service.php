<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Service
 * 
 * @property int $id
 * @property string|null $description
 * @property int $category_ext_id
 * 
 * @property Catégorie $catégorie
 *
 * @package App\Models
 */
class Service extends Model
{
	protected $table = 'services';
	public $timestamps = false;

	protected $casts = [
		'category_ext_id' => 'int'
	];

	protected $fillable = [
		'description',
		'category_ext_id'
	];

	public function catégorie()
	{
		return $this->belongsTo(Catégorie::class, 'category_ext_id');
	}
}
