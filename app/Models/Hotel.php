<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Hotel
 * 
 * @property int $id
 * @property string|null $matricule
 * @property string|null $addresse
 * @property string|null $description
 * @property float|null $prix
 * @property int|null $nombre_etoiles
 *
 * @package App\Models
 */
class Hotel extends Model
{
	protected $table = 'hotels';
	public $timestamps = false;

	protected $casts = [
		'prix' => 'float',
		'nombre_etoiles' => 'int'
	];

	protected $fillable = [
		'matricule',
		'addresse',
		'description',
		'prix',
		'nombre_etoiles'
	];
}
