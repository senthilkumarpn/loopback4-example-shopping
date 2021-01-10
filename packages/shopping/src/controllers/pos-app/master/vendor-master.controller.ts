// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: loopback4-example-shopping
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {authenticate} from '@loopback/authentication';
import {authorize} from '@loopback/authorization';
import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor, param,




  patch, post,






  put,

  requestBody
} from '@loopback/rest';
import {VendorMaster} from '../../../models';
import {VendorMasterRepository} from '../../../repositories';
import {basicAuthorization} from '../../../services/basic.authorizor';
import {OPERATION_SECURITY_SPEC} from '../../../utils/security-spec';


const apiPath = '/pos-app/vendor-master';
export class VendorMasterController {
  constructor(
    @repository(VendorMasterRepository)
    public vendorMasterRepository: VendorMasterRepository,
  ) { }

  @post(apiPath, {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '200': {
        description: 'VendorMaster model instance',
        content: {'application/json': {schema: getModelSchemaRef(VendorMaster)}},
      },
    },
  })
  @authenticate('jwt')
  @authorize({allowedRoles: ['admin', 'customer'], voters: [basicAuthorization]})
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(VendorMaster, {
            title: 'NewItemMaster',
            exclude: ['vendormasterid'],
          }),
        },
      },
    })
    vendorMaster: Omit<VendorMaster, 'vendormasterid'>,
  ): Promise<VendorMaster> {
    return this.vendorMasterRepository.create(vendorMaster);
  }

  @get(apiPath + '/count', {
    responses: {
      '200': {
        description: 'VendorMaster model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(VendorMaster))
    where?: Where<VendorMaster>,
  ): Promise<Count> {
    return this.vendorMasterRepository.count(where);
  }

  @get(apiPath + '', {
    responses: {
      '200': {
        description: 'Array of VendorMaster model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(VendorMaster, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(VendorMaster))
    filter?: Filter<VendorMaster>,
  ): Promise<VendorMaster[]> {
    return this.vendorMasterRepository.find(filter);
  }

  @patch(apiPath + '', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '200': {
        description: 'VendorMaster PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  @authenticate('jwt')
  @authorize({allowedRoles: ['admin'], voters: [basicAuthorization]})
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(VendorMaster, {partial: true}),
        },
      },
    })
    vendorMaster: VendorMaster,
    @param.query.object('where', getWhereSchemaFor(VendorMaster))
    where?: Where<VendorMaster>,
  ): Promise<Count> {
    return this.vendorMasterRepository.updateAll(vendorMaster, where);
  }

  @get(apiPath + '/{id}', {
    responses: {
      '200': {
        description: 'VendorMaster model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(VendorMaster, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.query.object('filter', getFilterSchemaFor(VendorMaster))
    filter?: Filter<VendorMaster>,
  ): Promise<VendorMaster> {
    return this.vendorMasterRepository.findById(id, filter);
  }

  @patch(apiPath + '/{id}', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '204': {
        description: 'VendorMaster PATCH success',
      },
    },
  })
  @authenticate('jwt')
  @authorize({allowedRoles: ['admin'], voters: [basicAuthorization]})
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(VendorMaster, {partial: true}),
        },
      },
    })
    vendorMaster: VendorMaster,
  ): Promise<void> {
    await this.vendorMasterRepository.updateById(id, vendorMaster);
  }

  @put(apiPath + '/{id}', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '204': {
        description: 'VendorMaster PUT success',
      },
    },
  })
  @authenticate('jwt')
  @authorize({allowedRoles: ['admin'], voters: [basicAuthorization]})
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() vendorMaster: VendorMaster,
  ): Promise<void> {
    await this.vendorMasterRepository.replaceById(id, vendorMaster);
  }

  @del(apiPath + '/{id}', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '204': {
        description: 'VendorMaster DELETE success',
      },
    },
  })
  @authenticate('jwt')
  @authorize({allowedRoles: ['admin'], voters: [basicAuthorization]})
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.vendorMasterRepository.deleteById(id);
  }
}
